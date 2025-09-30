# EmailJS Setup Instructions

The contact form has been configured to use EmailJS to send emails to `iptmim@gmail.com`. Follow these steps to complete the setup:

## 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## 2. Set Up Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Connect your Gmail account (iptmim@gmail.com)
5. Note down the **Service ID** (looks like `service_xxxxxxx`)

## 3. Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

```
Subject: New Contact Form Submission from {{from_name}}

You have received a new contact form submission from your website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service Needed: {{service}}
Language: {{locale}}
Submission Date: {{submission_date}}

Message:
{{message}}

---
This email was sent automatically from your website contact form.
Reply directly to this email to respond to {{from_name}} at {{from_email}}.
```

4. Set the template settings:
   - **To Email**: iptmim@gmail.com
   - **From Name**: TrueNorth Construction Website
   - **From Email**: Use the email you connected in step 2
   - **Reply To**: {{reply_to}}

5. Save the template and note down the **Template ID** (looks like `template_xxxxxxx`)

## 4. Get Public Key

1. Go to **Account** in your dashboard
2. Find your **Public Key** (looks like a long string of characters)

## 5. Update Environment Variables

Update your `.env.local` file with the actual values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## 6. Test the Form

1. Start your development server: `npm run dev`
2. Navigate to the contact form on your website
3. Fill out and submit the form
4. Check the email at iptmim@gmail.com

## Form Fields Included in Email

The following form fields are automatically included in the email:

- **Name** (`from_name`)
- **Email** (`from_email`)
- **Phone** (`phone`)
- **Service** (`service`) - The human-readable service name
- **Message** (`message`)
- **Language** (`locale`) - The current language setting
- **Submission Date** (`submission_date`) - Timestamp of when form was submitted

## Security Notes

- EmailJS runs on the client-side, so your public key is safe to expose
- The recipient email (iptmim@gmail.com) is hardcoded in the component for security
- All form validation is handled client-side with Zod schema validation

## Troubleshooting

- If emails aren't sending, check the browser console for error messages
- Verify all environment variables are set correctly
- Make sure your EmailJS service is active and email is verified
- Check your EmailJS dashboard for usage limits and quotas