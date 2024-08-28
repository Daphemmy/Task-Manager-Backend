// A middleware in back-end development is like a middleman that seats between the incoming request from the client and the final response from the server. its a function that can modify the request, process it, handle certain task before passing it unto the next part of the code or sending back a response

const notFound = (req, res) => {
  res.json({ message: "Route not found" });
};

module.exports = notFound;
