import React, {useState} from "react"

import {Button} from "app/shacdn/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "app/shacdn/components/ui/dialog"
import {Input} from "app/shacdn/components/ui/input"
import {Label} from "app/shacdn/components/ui/label"
import {defaultValue, IDatasource} from "app/shared/model/datasource.model";
import {Switch} from "app/shacdn/components/ui/switch";

const DatasourceUpdate = React.forwardRef((_, ref) => {
    const [datasource, setDatasource] = useState<IDatasource>(defaultValue);

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    React.useImperativeHandle(ref, () => ({
        open: handleOpen,
        close: handleClose,
    }));

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[425px]" onInteractOutside={(e) => e.preventDefault()}>
                <DialogHeader>
                    <DialogTitle>Add Datasource</DialogTitle>
                    <DialogDescription>
                        Make sure to add all the necessary information for your datasource.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="title" className="text-right">
                            Title
                        </Label>
                        <Input id="title" className="col-span-3" value={datasource.title}/>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-right">
                            Description
                        </Label>
                        <Input id="description" className="col-span-3"
                               value={datasource.description}/>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="activated" className="text-right">
                            Activated
                        </Label>
                        <Switch id="activated" className="col-span-3"
                                defaultChecked={true}
                        />
                    </div>

                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
});


export default DatasourceUpdate