import Input from "../Input";

export default function PersonalForm({ resume, onChange }) {
  return (
    <div className="personal-form">
      <Input
        label="Name"
        type="text"
        name="name"
        value={resume.name}
        onChange={onChange}
      />
      <Input
        label="Phone"
        type="text"
        name="phone"
        value={resume.phone}
        onChange={onChange}
      />
      <Input
        label="Email"
        type="email"
        name="email"
        value={resume.email}
        onChange={onChange}
      />
      <Input
        label="Location"
        type="text"
        name="location"
        value={resume.location}
        onChange={onChange}
      />
    </div>
  );
}