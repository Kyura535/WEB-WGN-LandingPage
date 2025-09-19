# WGN Contact Form with Resend Integration

This project includes a contact form that sends emails using the Resend API. Here's how to set it up:

## Setup Instructions

1. **Get a Resend API Key**:
   - Visit [Resend](https://resend.com/api-keys) and sign up for an account
   - Create a new API key

2. **Configure Environment Variables**:
   - Create a `.env.local` file in the root of your project
   - Add your Resend API key:
     ```
     RESEND_API_KEY=your_actual_resend_api_key_here
     ```

3. **Verify Domain (for production)**:
   - In your Resend dashboard, add and verify your domain
   - This is required for sending emails from your custom domain

4. **Update Email Addresses**:
   - In `app/api/contact/route.ts`, update the email addresses:
     ```typescript
     const { data, error } = await resend.emails.send({
       from: 'WGN Contact Form <contact@yourdomain.com>', // Your verified domain
       to: ['info@yourdomain.com'], // Where you want to receive emails
       // ... rest of the configuration
     });
     ```

## How It Works

1. **Frontend Form**:
   - The contact form collects name, email, and message
   - On submission, it sends a POST request to `/api/contact`

2. **API Route**:
   - The `/api/contact` route receives the form data
   - Validates the input fields
   - Sends an email using the Resend SDK
   - Returns success or error response

3. **Email Content**:
   - The email includes all form fields in an HTML template
   - Sent from your verified domain to your designated inbox

## Testing

For testing locally:
1. Make sure your `.env.local` file contains your Resend API key
2. Run the development server: `npm run dev`
3. Navigate to the contact form and submit a test message

## Deployment

When deploying to Vercel:
1. Add your `RESEND_API_KEY` as an environment variable in your Vercel project settings
2. Make sure your domain is verified in your Resend dashboard
3. Deploy your application

## Custom Build and Deployment Options

This project now supports multiple entry points and build options. See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed information about:

- Custom entry points (`index.js`)
- Standalone builds
- Additional build scripts
- Deployment strategies

## Customization

You can customize:
- Email template in `app/api/contact/route.ts`
- Form fields in `components/contact-form.tsx`
- Styling using Tailwind classes
- Success/error messages

## Troubleshooting

Common issues:
1. **Domain not verified**: Make sure your sending domain is verified in Resend
2. **API key missing**: Ensure `RESEND_API_KEY` is set in environment variables
3. **Rate limits**: Resend has rate limits that may affect high-volume usage

For more information, refer to the [Resend Documentation](https://resend.com/docs).