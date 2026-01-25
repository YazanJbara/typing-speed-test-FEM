import { Separator } from './ui/separator';
import {
  Select,
  SelectContent,
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectSeparator
} from '@/components/ui/select';
function Information() {
  return (
    <>
      <div className='space-y-2'>
        <b className='text-preset-3-mobile block'>WPM:</b>
        <strong className='text-preset-2 text-neutral-0'>40</strong>
      </div>
      <Separator orientation='vertical' />
      <div className='space-y-2'>
        <b className='text-preset-3-mobile block'>Accuracy:</b>
        <strong className='text-preset-2 text-yellow-400'>94%</strong>
      </div>
      <Separator orientation='vertical' />
      <div className='space-y-2'>
        <b className='text-preset-3-mobile block'>Time:</b>
        <strong className='text-preset-2 text-red-500'>0:46</strong>
      </div>
      <div className='col-span-full mt-5 flex items-center justify-center gap-2.5'>
        <Select>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Hard' />
          </SelectTrigger>
          <SelectContent position='popper'>
            <SelectItem value='Easy'>Easy</SelectItem>
            <SelectSeparator />
            <SelectItem value='normal'>Normal</SelectItem>
            <SelectSeparator />
            <SelectItem value='hard'>Hard</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Timed' />
          </SelectTrigger>
          <SelectContent position='popper'>
            <SelectItem value='timed'>Timed(60s)</SelectItem>
            <SelectSeparator />
            <SelectItem value='passage'>Passage</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
}

export default Information;
