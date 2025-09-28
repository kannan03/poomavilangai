import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import API from "../api";
import "./Dashboard.css";

export default function Dashboard() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ type:"income", name:"", description:"", amount:"", date:"", category:"" });
  const [editId, setEditId] = useState(null);

  useEffect(()=>{
    fetchItems();
  },[]);

  const fetchItems = async () => {
    const { data } = await API.get('/income_expense');
    setItems(data);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(editId){
      await API.put(`/income_expense/${editId}`, form);
      setEditId(null);
    } else {
      await API.post('/income_expense', form);
    }
    setForm({ type:"income", name:"", description:"", amount:"", date:"", category:"" });
    fetchItems();
  };

  const handleEdit = (item) => { setForm(item); setEditId(item._id); };
  const handleDelete = async (id) => { await API.delete(`/income_expense/${id}`); fetchItems(); };

  return (
    <Layout>
      <div className="dashboard">
        <h2>Income & Expense Dashboard</h2>
        <form onSubmit={handleSubmit}>
          <select value={form.type} onChange={e=>setForm({...form, type:e.target.value})}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <input type="date" value={form.date} onChange={e=>setForm({...form, date:e.target.value})} />
          <input placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
          <input type="number" placeholder="Amount" value={form.amount} onChange={e=>setForm({...form, amount:e.target.value})} />
          <input placeholder="Description" value={form.description} onChange={e=>setForm({...form, description:e.target.value})} />
          <input placeholder="Category" value={form.category} onChange={e=>setForm({...form, category:e.target.value})} />
          <button type="submit">{editId ? "Update" : "Add"}</button>
        </form>

        <table>
          <thead>
            <tr>
              <th>Type</th><th>Description</th><th>Amount</th><th>Name</th><th>Date</th><th>Category</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item=>(
              <tr key={item._id}>
                <td>{item.type}</td>
                <td>{item.description}</td>
                <td>{item.amount}</td>
                <td>{item.name}</td>
                <td>{item.date?.split("T")[0]}</td>
                <td>{item.category}</td>
                <td>
                  <button onClick={()=>handleEdit(item)}>Edit</button>
                  <button onClick={()=>handleDelete(item._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
