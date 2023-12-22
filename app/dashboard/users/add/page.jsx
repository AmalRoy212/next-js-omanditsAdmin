import React from 'react';
import styles from "../../../ui/dashboard/users/add/addUsers.module.css";

function AddUser() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>    
        <input type="text" placeholder='title' name="title" required id="" />
        <select name="cat" id="cat">
          <option value="">Choose</option>
          <option value="kitchen">Kitchen</option>
          <option value="Mobile">Mobile</option>
          <option value="Computer">Computer</option>
          <option value="Playstation">Playstation</option>
        </select>
        <input type="number" placeholder='price' name="price" id="" />
        <input type="number" placeholder='stock' name="stock" id="" />
        <input type="text" placeholder='color' name="color" id="" />
        <input type="number" placeholder='size' name="size" id="" />
        <textarea name="desc" id=""  rows="16" placeholder='discription'></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddUser
