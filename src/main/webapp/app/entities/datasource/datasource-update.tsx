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
import {Switch} from "app/shacdn/components/ui/switch";
import {useAppDispatch, useAppSelector} from "app/config/store";
import {createEntity} from "app/entities/datasource/datasource.reducer";

import {useFormik} from 'formik';
import * as yup from 'yup';

const DatasourceUpdate = React.forwardRef((_, ref) => {
    React.useImperativeHandle(ref, () => ({
        open: handleOpen,
        close: handleClose,
    }));

    const dispatch = useAppDispatch();

    const datasourceEntity = useAppSelector(state => state.datasource.entity);

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const formik = useFormik({
        initialValues: {
            id: null,
            title: '',
            description: '',
            activated: false,
        },
        validationSchema: yup.object({
            id: yup.number().nullable('id must not be null'),
            title: yup
                .string()
                .min(5, 'length must be at least 5 characters')
                .max(100, 'length must be at most 100 characters')
                .required('This field is required'),
            description: yup.string(),
            activated: yup.boolean().required('This field is required'),
        }),
        onSubmit(values) {
            dispatch(createEntity(values));
            handleClose();
        },
    });


    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[425px]" onInteractOutside={(e) => e.preventDefault()}>
                <form onSubmit={formik.handleSubmit}>
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
                            <Input id="title" className="col-span-3" defaultValue={datasourceEntity.title}
                                   onChange={formik.handleChange}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">
                                Description
                            </Label>
                            <Input id="description" className="col-span-3"
                                   defaultChecked={datasourceEntity.description}
                                   onChange={formik.handleChange}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="activated" className="text-right">
                                Activated
                            </Label>
                            <Switch id="activated" className="col-span-3"
                                    defaultChecked={true}
                                    onCheckedChange={(checked) => formik.setFieldValue('activated', checked)}
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Create</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
});


export default DatasourceUpdate