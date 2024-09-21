   import React from 'react'
   import styled from "styled-components";
   const Contact = () => {
      const Wrapper = styled.section`
           padding: 9rem 0 5rem 0;

    .container {
      margin-top: 6rem;
      text-align: center;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }  
`;
     return (
      <Wrapper>
      <h2 className="common-heading">Feel Free to Contact us</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14393.509658379742!2d85.14282267563979!3d25.592372141967008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5884484c81cb%3A0xfae38a8a97ed5467!2sKankarbagh%2C%20Patna%2C%20Bihar%20800020!5e0!3m2!1sen!2sin!4v1725179219475!5m2!1sen!2sin" width="100%" height="450"
       style={{border:0}}
        allowFullScreen="" 
        loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
           <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/manwvrla"
            method="POST"
            className="contact-inputs">
            <input
              type="text"  
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>  
        </Wrapper>
     )
   }  
         
   export default Contact
      