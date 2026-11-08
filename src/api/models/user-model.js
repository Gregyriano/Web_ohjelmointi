import promisePool from "../../utils/database.js";


const findUserByUserName = async (username) => {
  const [rows] = await promisePool.execute(
    'SELECT * FROM wsk_users WHERE username = ?',
    [username]
  );

}

const findCatByUserId = async (userId) => {
  const [rows] = await promisePool.execute(
    'SELECT * FROM wsk_cats WHERE owner = ?',
    [userId]
  );
  return rows[0];
};

const addUser = async (user) => {
  const {name, username, email, salasana, password} = user;
  const sql = `INSERT INTO wsk_cats (name, username, email, salasana, password)
               VALUES (?, ?, ?, ?, ?)`;
  const params = [name, username, email, salasana, password];
  const [result] = await promisePool.execute(sql, params);
  console.log('insert query result', result);
  if (result.affectedRows === 0) {
    return false;
  }
  return {user_id: result.insertId};
};


export { findUserByUserName, findCatByUserId, addUser };

