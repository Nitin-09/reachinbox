// pages/api/auth/callback.js
export default async (req, res) => {
    const { token } = req.query;
  
    // Process the token and fetch user data from Google
    // Simulate fetching user data
    const userData = {
      id: '12345',
      name: 'John Doe',
      email: 'johndoe@example.com'
    };
  
    // Redirect to the onebox page with user data
    res.redirect(`/onebox?user=${encodeURIComponent(JSON.stringify(userData))}`);
  };
  