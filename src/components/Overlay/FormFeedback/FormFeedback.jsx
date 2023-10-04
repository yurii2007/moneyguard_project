import emailjs from 'emailjs-com';
export const FormFeedback = () => {
  const onSubmit = async e => {
    e.preventDefault();
    const { email, name, feedback } = e.target;
    const clientFeedback = {
      from_name: name.value,
      message: feedback.value,
      from_email: email.value,
    };
    await emailjs.send(
      'service_7p9oult',
      'template_xp94twj',
      clientFeedback,
      'K8qxp8teKP_1Fn8-r'
    );
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        <input type="email" name="email" />
      </label>
      <label>
        <input type="text" name="name" />
      </label>
      <textarea name="feedback" autoComplete="off"></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};
