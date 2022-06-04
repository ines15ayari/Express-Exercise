const Middleware = (req, res, next) => {
  let day = new Date();
  let numberOfDate = day.getDay();
  console.log(numberOfDate);
  let time = day.getHours();
  if (numberOfDate <= 5 && numberOfDate >= 1 && time >= 9 && time <= 17) {
    next();
  } else {
    return res.status(400).json({ msg: "you are not authorized" });
  }
};

module.exports = Middleware;
