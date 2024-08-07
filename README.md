ReachInbox Web Application
Overview
ReachInbox is an AI-driven platform designed to transform cold outreach. This Next.js web application showcases key functionalities including user authentication, data management, and customizable reply features. The app supports Google login, integrates with various APIs for data handling, and includes features such as light and dark mode.

Features
Google Login: Secure authentication using Google accounts.
Onebox Screen: Displays and manages threads using provided APIs.
Keyboard Shortcuts:
“D” for deleting threads.
“R” for opening the reply modal.
Reply Modal: Includes a custom text editor with “SAVE” and “Variables” buttons.
Light and Dark Modes: Toggle between light and dark themes for better readability.
Setup and Installation
To get started with the ReachInbox web application, follow these steps:

1. Clone the Repository
bash
Copy code
git clone [repository-url]
cd reachinbox
2. Install Dependencies
Make sure you have Node.js and npm installed. Then, run the following command to install the necessary dependencies:

bash
Copy code
npm install
3. Configure Environment Variables
Create a .env.local file in the root of the project and add the necessary environment variables. For example:

css
Copy code
NEXT_PUBLIC_API_URL=[your-api-url]
NEXT_PUBLIC_GOOGLE_CLIENT_ID=[your-google-client-id]
Replace [your-api-url] and [your-google-client-id] with your actual API URL and Google Client ID.

4. Run the Development Server
Start the development server with:

bash
Copy code
npm run dev
The application will be available at http://localhost:3000.

5. Running Tests
If you have any tests, you can run them using:

bash
Copy code
npm test
Usage
Login: Use the Google login button to authenticate.
Navigate to Onebox Screen: After logging in, you will be redirected to the onebox screen where you can view and manage threads.
Delete Threads: Press the “D” key to delete a thread.
Open Reply Modal: Press the “R” key or click the reply button to open the reply modal.
Compose and Send Replies: Use the custom text editor in the reply modal to compose replies. Click “Send” to submit. Note: There is currently an issue with the reply API returning an Internal Server Error.
Switch Modes: Toggle between light and dark modes using the mode switcher.
Known Issues
Reply API: Currently returning an Internal Server Error. This issue is being investigated.
Contributing
If you would like to contribute to the ReachInbox project, please follow these guidelines:

Fork the repository.
Create a new branch for your changes.
Make your changes and commit them with clear messages.
Push your changes to your forked repository.
Open a pull request with a description of your changes.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For any questions or further information, please reach out to [Your Name] at [nitingangwani982000@example.com].