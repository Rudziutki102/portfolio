"use server"
import React from 'react'
import { validateString,getErrorMessage } from "@/lib/utils"
import { Resend } from "resend"
import ContactFormEmail from "@/email/contact-form-email"
const resend = new Resend(process.env.RESEND_API_KEY)



export const sendEmail = async(formData:FormData) =>{
    const message = formData.get('message')
    const subject = formData.get('senderEmail')
    if(!validateString(subject,500)){
        return {
            error:'invalid sender email'
        }
    }
    if(!validateString(message,5000)){
        return {
            error:'invalid sender email'
        }
    }
    let data;
    try{
        data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to:'mateusz.makowski.102@gmail.com',
            subject:' Message from contact form',
            reply_to:subject as string,
            react: React.createElement(ContactFormEmail,{
                message: message as string,
                senderEmail:subject as string
            })
        })        
    } catch(error:unknown){
        return {
            error: getErrorMessage(error)
        }
    }
    return {
        data
    }
}