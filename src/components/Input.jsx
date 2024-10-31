export default function Input({ label, type, name, value, onChange }) {
  if (type === 'textarea') {
    return (
      <>
        <label>{label}</label>
        <textarea 
          type={type} 
          name={name} 
          value={value} 
          onChange={onChange} 
          data-key={name}
        />
      </>
    );
  } else {
    return (
      <>
        <label>{label}</label>
        <input 
          type={type} 
          name={name} 
          value={value} 
          onChange={onChange} 
          data-key={name}
        />
      </>
    );
  }
}