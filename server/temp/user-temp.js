const emailVerifyTempHandler = (user) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email Verification</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #f4f4f4;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4f4f4; padding: 20px 0;">
            <tr>
                <td align="center">
                    <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                        <!-- Header -->
                        <tr>
                            <td style="padding: 40px 40px 20px; text-align: center;">
                                <h1 style="color: #1a1a1a; font-size: 24px; margin: 0;">Verify Your Account</h1>
                            </td>
                        </tr>
                        <!-- Body -->
                        <tr>
                            <td style="padding: 0 40px 20px;">
                                <p style="color: #333333; font-size: 16px; line-height: 24px; margin: 0 0 16px;">
                                    Hello ${user?.username || 'Valued Customer'},
                                </p>
                                <p style="color: #333333; font-size: 16px; line-height: 24px; margin: 0 0 16px;">
                                    Thank you for joining us! To complete your registration and unlock full access to your account, please verify your email address by clicking the button below.
                                </p>
                                <p style="text-align: center; margin: 24px 0;">
                                    <a href="http://localhost:3000/api/user/auth/register/verify/${user._id}" 
                                       style="display: inline-block; padding: 12px 24px; background-color:rgb(0, 87, 181); color: #ffffff; text-decoration: none; font-size: 16px; font-weight: bold; border-radius: 4px;">
                                       Verify Your Email
                                    </a>
                                </p>
                                <p style="color: #666666; font-size: 14px; line-height: 20px; margin: 0 0 16px;">
                                    If the button above doesn’t work, copy and paste the following link into your browser:
                                    <br>
                                    <a href="http://localhost:3000/api/user/auth/register/verify/${user._id}" style="color:rgb(0, 83, 171); text-decoration: none;">
                                        http://localhost:3000/api/user/auth/register/verify/${user._id}
                                    </a>
                                </p>
                            </td>
                        </tr>
                        <!-- Footer -->
                        <tr>
                            <td style="padding: 20px 40px; background-color: #f8f9fa; border-radius: 0 0 8px 8px; text-align: center;">
                                <p style="color: #666666; font-size: 12px; line-height: 18px; margin: 0;">
                                    If you did not create an account, please ignore this email.
                                    <br>
                                    &copy; ${new Date().getFullYear()} Placefolio. All rights reserved.
                                </p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>
    `;
};

module.exports = { emailVerifyTempHandler };