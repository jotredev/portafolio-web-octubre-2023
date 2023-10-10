'use client';

import Button from '@/components/ui/button';

const Form = () => {
  return (
    <form className='max-w-2xl mx-auto'>
      <div className='flex flex-col lg:flex-row lg:items-center gap-4 mb-5'>
        <input
          type='text'
          className='w-full bg-dark-light outline-none py-3 px-4 rounded'
          placeholder='Name'
        />
        <input
          type='text'
          className='w-full bg-dark-light outline-none py-3 px-4 rounded'
          placeholder='Lastname'
        />
      </div>
      <div>
        <textarea
          className='w-full bg-dark-light outline-none py-3 px-4 rounded resize-none mb-5'
          placeholder='Message'
          rows={5}
        />
      </div>
      <Button type='submit' label='Send Message' onClick={() => {}} />
    </form>
  );
};

export default Form;
