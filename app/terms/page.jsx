import React from 'react';

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f18] via-[#14212f] to-[#f0f0f0] px-4 py-10 flex justify-center items-start">
      <div className="max-w-5xl w-full bg-black/50 backdrop-blur-md p-10 rounded-xl shadow-2xl text-white space-y-6">
        <h1 className="text-4xl font-bold text-center mb-6">Terms and Conditions</h1>

        <section>
          <h2 className="text-2xl font-semibold mb-2">CODE OF HONOR</h2>
          <p>
            These Terms of Use (the “Terms”) are a binding contract between you and JobSeeker (“JobSeeker,” “we” and “us”). 
            If you have any questions, comments, or concerns regarding these terms or the Services, please contact us.
          </p>
          <p>
            In these Terms, “User” means anyone who accesses and/or registers for our Services, including without limitation 
            can extract services within our policies. Violation of which will lead to blacklisting of the client.
          </p>
          <p>
            The client must respect the conditions asked by our members. Once the amount is quoted by our employee and 
            you agreed to it, it will be finalised. Further no alterations or changes will be made from any side (yours and ours), 
            once we start working on it. If the user faces any inappropriate behavior or actions by employees from our side, 
            he/she is advised and has the freedom to report to us.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">DEALING RULES</h2>
          <p>
            The users are strictly advised not to provide any personal information to the employee other than what is asked.
            The privacy of the user is our topmost priority. We keep your data safe and advise you to do the same.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">PAYMENT POLICIES</h2>
          <p>
            The client hereby should pay the entire amount of the services required beforehand. 
            We ensure to provide best of our services within specified time. Failing which, 
            we ensure to return the amount within 20-30 business days.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">USE OF SERVICES</h2>
          <p>
            JobSeeker only authorizes you to use the Services and Content for your own personal use 
            in compliance with all applicable laws. You may not resell or make any commercial use of the Services 
            or any Content therein (other than your own Submissions).
          </p>
          <p>
            Any Content you access through the Services is licensed through your purchase of the Services 
            personally to you to view and use the Content. “Content” means any information or materials displayed 
            on the Services, such as text, graphics, data, articles, photos, images, illustrations, codes, 
            website structure, logos, content answers, and so forth. “Submissions” means any Content you post, 
            upload, share, store, or otherwise provide through the Services.
          </p>
        </section>
      </div>
    </div>
  );
};

export default page;
