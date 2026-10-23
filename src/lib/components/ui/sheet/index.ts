import { Dialog as SheetPrimitive } from 'bits-ui';
import Content from './sheet-content.svelte';
import Title from './sheet-title.svelte';

const Root = SheetPrimitive.Root;
const Trigger = SheetPrimitive.Trigger;
const Close = SheetPrimitive.Close;
const Description = SheetPrimitive.Description;

export {
	Root,
	Trigger,
	Close,
	Content,
	Title,
	Description,
	//
	Root as Sheet,
	Trigger as SheetTrigger,
	Close as SheetClose,
	Content as SheetContent,
	Title as SheetTitle,
	Description as SheetDescription
};
