const { getObjectFromS3 } = require("../helper/utils");

exports.verifyEmailTemplate = async function (updateObject) {
    const template = await getObjectFromS3("verifyTemplate.html" , updateObject);
    if(template) {
        return template;
    }else{
        return null;
    }
    // const verifyEmailHTML = `<!DOCTYPE html>
    // <html>
    
    // <head>
    //     <meta charset="utf-8">
    //     <meta http-equiv="X-UA-Compatible" content="IE=edge">
    //     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    //     <meta name="description" content="">
    //     <meta name="author" content="">
    //     <title>Verification Email</title>
    //     <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
    //         rel="stylesheet">
    // </head>
    
    // <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #F2F4F7;" leftmargin="0">
    //     <!--100% body table-->
    //     <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#F2F4F7;"
    //         style="@import url(https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap); font-family: 'Inter', sans-serif !important;background:#F2F4F7;">
    //         <tr>
    //             <td>
    //                 <!--inner table-->
    //                 <table style="max-width:550px;margin:120px auto;border:0px;border-radius:0px;" width="100%" border="0"
    //                     align="center" cellpadding="0" cellspacing="0">
    //                     <tr style="margin-top:30px;">
    //                         <td>
    //                             <table
    //                                 style="border-radius:0px;-webkit-box-shadow:0px 4px 60px rgba(0, 0, 0, 0.05);;-moz-box-shadow:0px 4px 60px rgba(0, 0, 0, 0.05);box-shadow:0px 4px 60px rgba(0, 0, 0, 0.05);width:94%;margin:0 auto;background-color:#fff;">
    //                                 <tr>
    //                                     <td style="height:20px;">&nbsp;</td>
    //                                 </tr>
    //                                 <!--Logo-->
    //                                 <tr>
    //                                     <td style="text-align:center;">
    //                                         <a href="#" title="logo" target="_blank">
    //                                             <img src="https://s3.amazonaws.com/company.resources/Lucid-ELD-Logo.png"
    //                                                 style="width: 140px;">
    //                                         </a>
    //                                     </td>
    //                                 </tr>
    //                                 <tr>
    //                                     <td style="height:20px;">&nbsp;</td>
    //                                 </tr>
    //                                 <tr>
    //                                     <!-- otp section-->
    //                                     <td>
    //                                         <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
    //                                             style="max-width:550px;background:#fff;color:#1D2939; border-radius:3px; text-align:center;">
    //                                             <tr>
    //                                                 <td style="padding:0 35px;">
    //                                                 <h1>${name}</h1>
    //                                                     <h2
    //                                                         style="color:#1D2939; font-weight:700; margin:0;font-size:24px;font-family: 'Inter', sans-serif !important;text-align:center;">
    //                                                         Please Verify Your Account</h2>
                                                   
    //                                                     <p style="color:#667085; font-size:12px;line-height:24px; margin:0;text-align:center;margin-top:5px;font-family: 'Inter', sans-serif !important;margin-top:10px;">
    //                                                         You're almost there ! Just click on the link to verify your account
    //                                                     </p>
    //                                                 </td>
    //                                             </tr>
    //                                             <tr>
    //                                                 <td style="height:20px;">&nbsp;</td>
    //                                             </tr>
    //                                             <tr style="text-align: center;">
    //                                                 <td style="padding:10px 35px 20px 35px;margin-top:20px;">
                                                        
    //                                                         <a href=${verificationLink} style="color:#fff;background:#1570EF;font-size:14px;font-weight:400;text-transform:uppercase;font-family: 'Inter', sans-serif !important; padding:10px 16px;border-radius:8px;text-decoration: none;margin-top:10px;margin-bottom:20px;">
    //                                                             Click Here
    //                                                         </a>
                                                        
    //                                                     <p style="color:#667085; font-size:14px;line-height:24px; margin:0;text-align:center;margin-top:20px;font-family: 'Inter', sans-serif !important;">
    //                                                         The link will be expired in 15 minutes.
    //                                                     </p>
    //                                                     <p style="color:#667085; font-size:12px; line-height:19px; margin:0;text-align:center;margin-top:0px;padding-top:10px;font-family: 'Inter', sans-serif !important;font-weight:400;margin:0 auto;letter-spacing:0.05rem;">
    //                                         If this wasn’t you, please ignore this email and immediately contact our
    //                                         customer service center at <a href="mailto:support@lucideld.com" style="color:#2E90FA;text-decoration: none;">support@lucideld.com</a> or
    //                                         call us at <a href="tel:(717) 703-0377" style="color:#2E90FA;text-decoration:none;"> (717) 703-0377.</a>
    //                                     </p>
    //                                                 </td>
    //                                             </tr>
    //                                         </table>
    //                                     </td>
    //                                 </tr>
    //                                 <tr>
    //                     </tr>
    //                     <tr>
    //                         <td style="height:20px;">&nbsp;</td>
    //                     </tr>
    //                 </table>
    //             </td>
    //         </tr>
    //     </table>
    //     </td>
    //     </tr>
    //     </table>
    // </body>
    
    // </html>`


    // return verifyEmailHTML;
}

exports.forgotPasswordTemplate = async  function (updateObject) {

    const template = await getObjectFromS3("forgotPassword.html" , updateObject);
    if(template) {
        return template;
    }else{
        return null;
    }
//     const resetPasswordHTML = `
//     <!DOCTYPE html>
// <html>

// <head>
//     <meta charset="utf-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
//     <meta name="description" content="">
//     <meta name="author" content="">
//     <title>Authentication Email</title>
//     <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
//         rel="stylesheet">
// </head>

// <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #F2F4F7;" leftmargin="0">
//     <!--100% body table-->
//     <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#F2F4F7;"
//         style="@import url(https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap); font-family: 'Inter', sans-serif !important;background:#F2F4F7;">
//         <tr>
//             <td>
//                 <!--inner table-->
//                 <table style="max-width:550px;margin:90px auto;border:0px;border-radius:0px;" width="100%" border="0"
//                     align="center" cellpadding="0" cellspacing="0">
//                     <tr style="margin-top:30px;">
//                         <td>
//                             <table
//                                 style="border-radius:0px;-webkit-box-shadow:0px 4px 60px rgba(0, 0, 0, 0.05);;-moz-box-shadow:0px 4px 60px rgba(0, 0, 0, 0.05);box-shadow:0px 4px 60px rgba(0, 0, 0, 0.05);width:94%;margin:0 auto;background-color:#fff;">
//                                 <tr>
//                                     <td style="height:20px;">&nbsp;</td>
//                                 </tr>
//                                 <!--Logo-->
//                                 <tr>
//                                     <td style="text-align:center;">
//                                         <a href="#" title="logo" target="_blank">
//                                             <img src="https://s3.amazonaws.com/company.resources/Lucid-ELD-Logo.png" style="width: 140px;">
//                                         </a>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td style="height:20px;">&nbsp;</td>
//                                 </tr>
//                                 <tr>
//                                     <!-- otp section-->
//                                     <td>
//                                         <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
//                                             style="max-width:550px;background:#fff;color:#1D2939; border-radius:3px; text-align:center;">
//                                             <tr>
//                                                 <td style="padding:0 35px;">
//                                                     <h1
//                                                         style="color:#1D2939; font-weight:500; margin:0;font-size:24px;font-family: 'Inter', sans-serif !important;text-align:center;">
//                                                         ${name}, you have requested to reset your password</h1>
                                               
//                                                     <p style="color:#667085; font-size:12px;line-height:24px; margin:0;text-align:center;margin-top:5px;font-family: 'Inter', sans-serif !important;margin-top:10px;">
//                                                         We cannot simply send you your old password. A unique link to reset your password has been generated for you. To reset your password, click the following link and reset your Password.
//                                                     </p>
//                                                 </td>
//                                             </tr>
//                                             <tr>
//                                                 <td style="height:20px;">&nbsp;</td>
//                                             </tr>
//                                             <tr style="text-align: center;">
//                                                 <td style="padding:30px 35px 20px 35px;margin-top:20px;">
                                                    
//                                                         <a target="_blank" href="${resetPasswordLink}" style="color:#fff;background:#1570EF;font-size:14px;font-weight:400;text-transform:uppercase;font-family: 'Inter', sans-serif !important; padding:10px 16px;border-radius:8px;text-decoration: none;margin-top:10px;margin-bottom:20px;">
//                                                             Reset Password
//                                                         </a>
                                                    
//                                                     <p style="color:#667085; font-size:14px;line-height:24px; margin:0;text-align:center;margin-top:20px;font-family: 'Inter', sans-serif !important;">
//                                                         The link will be expired in 15 minutes.
//                                                     </p>
//                                                     <p style="color:#667085; font-size:12px; line-height:19px; margin:0;text-align:center;margin-top:0px;padding-top:10px;font-family: 'Inter', sans-serif !important;font-weight:400;margin:0 auto;letter-spacing:0.05rem;">
//                                                     If this wasn’t you, please ignore this email and immediately contact our
//                                                     customer service center at <a href="mailto:support@lucideld.com" style="color:#2E90FA;text-decoration: none;">support@lucideld.com</a> or
//                                                     call us at <a href="tel:(717) 703-0377" style="color:#2E90FA;text-decoration:none;"> (717) 703-0377.</a>
//                                                 </p>
//                                                 </td>
//                                             </tr>
//                                         </table>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                     </tr>
//                     <tr>
//                         <td style="height:20px;">&nbsp;</td>
//                     </tr>
//                 </table>
//             </td>
//         </tr>
//     </table>
//     </td>
//     </tr>
//     </table>
//     <!--/100% body table-->
// </body>

// </html>`


    // return resetPasswordHTML;
}

exports.loginOTPTemplate = async function (name, otp) {
    const updateObject = {name : name , otp : otp};
    const template = await getObjectFromS3("" , updateObject);
    return template;
    //console.log("resetPasswordLinkresetPasswordLink",resetPasswordLink);

    // const loginOTPHTML = `<!DOCTYPE html>
    // <html>
    
    // <head>
    //     <meta charset="utf-8">
    //     <meta http-equiv="X-UA-Compatible" content="IE=edge">
    //     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    //     <meta name="description" content="">
    //     <meta name="author" content="">
    //     <title>Authentication Email</title>
    //     <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
    //         rel="stylesheet">
    // </head>
    
    // <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #F2F4F7;" leftmargin="0">
    //     <!--100% body table-->
    //     <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#F2F4F7;"
    //         style="@import url(https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap); font-family: 'Inter', sans-serif !important;background:#F2F4F7;">
    //         <tr>
    //             <td>
    //                 <!--inner table-->
    //                 <table style="max-width:550px;margin:90px auto;border:0px;border-radius:0px;" width="100%" border="0"
    //                     align="center" cellpadding="0" cellspacing="0">
    //                     <tr style="margin-top:30px;">
    //                         <td>
    //                             <table
    //                                 style="border-radius:0px;-webkit-box-shadow:0px 4px 60px rgba(0, 0, 0, 0.05);;-moz-box-shadow:0px 4px 60px rgba(0, 0, 0, 0.05);box-shadow:0px 4px 60px rgba(0, 0, 0, 0.05);width:94%;margin:0 auto;background-color:#fff;">
    //                                 <tr>
    //                                     <td style="height:20px;">&nbsp;</td>
    //                                 </tr>
    //                                 <!--Logo-->
    //                                 <tr>
    //                                     <td style="text-align:center;">
    //                                         <a href="#" title="logo" target="_blank">
    //                                         <img src="https://s3.amazonaws.com/company.resources/Lucid-ELD-Logo.png" style="width: 140px;">
    //                                         </a>
    //                                     </td>
    //                                 </tr>
    //                                 <tr>
    //                                     <td style="height:20px;">&nbsp;</td>
    //                                 </tr>
    //                                 <tr>
    //                                     <!-- otp section-->
    //                                     <td>
    //                                         <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0"
    //                                             style="max-width:550px;background:#fff;color:#1D2939; border-radius:3px; text-align:center;">
    //                                             <tr>
    //                                                 <td style="padding:0 35px;">
    //                                                     <h1
    //                                                         style="color:#1D2939; font-weight:700; margin:0;font-size:30px;font-family: 'Inter', sans-serif !important;text-align:center;">
    //                                                         Verfiy your login</h1></td>
    //                                                 </tr>
    //                                                 <tr>
    //                                                 <td style="padding:0 35px;">
    //                                                     <p style="color:#667085; font-size:14px;line-height:24px; margin:0;text-align:center;margin-top:5px;font-family: 'Inter', sans-serif !important;">
    //                                                         Please enter this confirmation code on the website:
    //                                                     </p>
    //                                                 </td>
    //                                             </tr>
    //                                             <tr>
    //                                                 <td style="height:20px;">&nbsp;</td>
    //                                             </tr>
    //                                             <tr style="text-align: center;">
    //                                                 <td style="padding:0px 35px 20px 35px">
    //                                                     <span
    //                                                         style="padding: 18px 28px; color: #000; background-color:#F2F4F7 !important; width:auto;display:block;border:none; margin:0 auto;font-size: 15px;text-transform:capitalize;">
    //                                                         <p style="color:#1D2939;font-size:30px;font-weight:700;margin:0px;font-family: 'Inter', sans-serif !important;">
    //                                                         ${name} Your OTP is ${otp}
    //                                                         </p>
    //                                                     </span>
    //                                                     <p style="color:#667085; font-size:14px;line-height:24px; margin:0;text-align:center;margin-top:5px;font-family: 'Inter', sans-serif !important;">
    //                                                         Code is only valid for 1 hour
    //                                                     </p>
    //                                                 </td>
    //                                             </tr>
    //                                         </table>
    //                                     </td>
    //                                 </tr>
    //                                 <tr>
    //                                     <td style="text-align:center;padding:0px 35px 0px 35px">
    //                                         <p style="color:#667085; font-size:12px;line-height:19px; margin:0;text-align:center;margin-top:0px;font-family: 'Inter', sans-serif !important;font-weight:400;margin:0 auto;letter-spacing:0.05rem;">
    //                                             If this wasn’t you, please ignore this email and immediately contact our
    //                                             customer service center at <a href="mailto:support@lucideld.com" style="color:#2E90FA;text-decoration: none;">support@lucideld.com</a> or
    //                                             call us at <a href="tel:(717) 703-0377" style="color:#2E90FA;text-decoration:none;"> (717) 703-0377.</a>
    //                                         </p>
    //                                     </td>         
    //                     </tr>
    //                     <tr>
    //                         <td style="height:40px;">&nbsp;</td>
    //                     </tr>
    //                 </table>
    //             </td>
    //         </tr>
    //     </table>
    //     </td>
    //     </tr>
    //     </table>
    //     <!--/100% body table-->
    // </body>
    
    // </html>`


    // return loginOTPHTML;
}