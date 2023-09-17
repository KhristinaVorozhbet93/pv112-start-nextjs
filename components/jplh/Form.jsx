import React, { memo, useState } from "react";
import styles from "./Form.module.css";

export default memo (function Form({addUser}) {
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        email: "",
        address: {
            street: "",
            suite: "",
            city: "",
        },
        phone: "",
    }),
        formSubmit = (e) => {
            e.preventDefault();
            addUser(formData);
        }

    return (
      <form onSubmit={formSubmit} className= {styles.form}>    
       <div>
              <input type="text" placeholder="Id" onInput={(e) => setFormData({...formData, id: e.target.value})}/>
          </div>
          <div>
              <input type="text" placeholder="Name" onInput={(e) => setFormData({...formData, name: e.target.value})}/>
          </div>
          <div>
              <input type="text" placeholder="Email"  onInput={(e) => setFormData({...formData, email: e.target.value})}/>
          </div>
          <div>
              <input type="text" placeholder="Street"  onInput={(e) => setFormData({...formData, address: {street: e.target.value}})}/>
          </div>
          <div>
              <input type="text" placeholder="Suite" onInput={(e) => setFormData({...formData, address: {suite: e.target.value}})}/>
          </div>
          <div>
              <input type="text" placeholder="City" onInput={(e) => setFormData({...formData, address: {city: e.target.value}})}/>
          </div>
          <div>
              <input type="text" placeholder="Phone" onInput={(e) => setFormData({...formData, phone: e.target.value})}/>
          </div>
          <button type="submit">Добавить</button>
      </form>
    )
});