import con from '../database/dbconnection'

export default con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM pets", function (err, result) {
  if (err) throw err;
  console.log(result);
  });
});;
