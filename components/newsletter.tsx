import { HeadingH3, Paragraph } from './typography';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useFormFields, useMailChimpForm } from 'use-mailchimp-form';

const Newsletter = () => {
  const url =
    'https://buddyhead.us14.list-manage.com/subscribe/post?u=b0028bf7d89bfb68709186c92&amp;id=f8f9b3de4c&amp;f_id=008ebee0f0';
  const { loading, error, success, message, handleSubmit } =
    useMailChimpForm(url);
  const { fields, handleFieldChange } = useFormFields({
    EMAIL: '',
  });
  return (
    <div className="p-16 md:px-64 md:py-16 text-center">
      <HeadingH3>Newsletter</HeadingH3>
      <Paragraph>Sign up for updates</Paragraph>
      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit(fields);
          }}
        >
          <Input
            id="EMAIL"
            className="mb-4"
            type="email"
            placeholder="test@example.com"
            value={fields.EMAIL}
            onChange={handleFieldChange}
          />
          <Button variant="outline" type="submit">
            Submit
          </Button>
        </form>
        {loading && 'submitting'}
        {error && message}
        {success && message}
      </div>
    </div>
  );
};

export default Newsletter;
