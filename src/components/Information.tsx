import { Separator } from './ui/separator';
function Information() {
  return (
    <>
      <div className='space-y-2'>
        <b className='text-preset-3-mobile block'>WPM:</b>
        <strong className='text-preset-2 text-neutral-0'>40</strong>
      </div>
      <Separator orientation='vertical'  />
      <div className='space-y-2'>
        <b className='text-preset-3-mobile block'>Accuracy:</b>
        <strong className='text-preset-2 text-yellow-400'>94%</strong>
      </div>
      <Separator orientation='vertical'  />
      <div className='space-y-2'>
        <b className='text-preset-3-mobile block'>Time:</b>
        <strong className='text-preset-2 text-red-500'>0:46</strong>
      </div>
    </>
  );
}

export default Information;
