// Displays the long email address with sensible line-break points instead of breaking mid-word.
export default function EmailText({ email }) {
  const [user, domain] = email.split("@");
  const parts = domain.split(/(?=Solutions)/);
  return (
    <span>
      {user}@
      <wbr />
      {parts.map((p, i) => (
        <span key={p}>
          {i > 0 && <wbr />}
          {p}
        </span>
      ))}
    </span>
  );
}
