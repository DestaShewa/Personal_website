import { NextResponse } from 'next/server';
import { query } from '../../../lib/db';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, projectType, description, budget, timeline } = body;

    // Basic validation
    if (!name || !email || !description) {
      return NextResponse.json(
        { message: 'Name, email, and description are required fields.' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Only attempt database insert if DATABASE_URL is configured
    if (process.env.DATABASE_URL) {
      try {
        const text = `
          INSERT INTO contact_submissions 
          (name, email, project_type, description, budget, timeline) 
          VALUES ($1, $2, $3, $4, $5, $6)
          RETURNING id
        `;
        const values = [name, email, projectType || null, description, budget || null, timeline || null];
        
        await query(text, values);
      } catch (dbError) {
        console.error('Database insertion error:', dbError);
        // If the table doesn't exist, we'll log it but still return success to the user
        // This prevents the form from breaking if the user hasn't run the migration yet
        if (dbError.code === '42P01') {
          console.warn('The contact_submissions table does not exist. Please run the migration script.');
        } else {
          throw dbError; // Rethrow other DB errors
        }
      }
    } else {
      // Development mode fallback when no database is configured
      console.log('No DATABASE_URL configured. Form submission received:', body);
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'An error occurred while processing your request.' },
      { status: 500 }
    );
  }
}

