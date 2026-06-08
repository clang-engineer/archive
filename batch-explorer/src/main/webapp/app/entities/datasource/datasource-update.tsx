import React, {useState} from "react"

import {Button} from "app/shared/shacdn/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "app/shared/shacdn/components/ui/dialog"
import {Input} from "app/shared/shacdn/components/ui/input"
import {Label} from "app/shared/shacdn/components/ui/label"
import {Switch} from "app/shared/shacdn/components/ui/switch";
import {useAppDispatch} from "app/config/store";
import {createEntity, updateEntity} from "app/entities/datasource/datasource.reducer";

import {useFormik} from 'formik';
import * as yup from 'yup';
import {defaultValue, IDatasource} from "app/shared/model/datasource.model";

const DatasourceUpdate = React.forwardRef((_, ref) => {
    const dispatch = useAppDispatch();

    const [datasource, setDatasource] = useState<IDatasource>(defaultValue);

    const isNew = datasource.id === undefined || datasource.id === null;
    const [open, setOpen] = useState(false)

    const handleOpen = (row: IDatasource) => {
        if (row && row.id) {
            setDatasource(row)
        }
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    React.useImperativeHandle(ref, () => ({
        open: handleOpen,
        close: handleClose,
    }));

    const saveEntity = values => {
        const entity = {
            ...datasource,
            ...values,
        };

        if (isNew) {
            dispatch(createEntity(entity));
        } else {
            dispatch(updateEntity(entity));
        }
    };

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: datasource,
        validationSchema: yup.object({
            id: yup.number().nullable('id must not be null'),
            title: yup
                .string()
                .min(5, 'length must be at least 5 characters')
                .max(100, 'length must be at most 100 characters')
                .required('This field is required'),
            description: yup.string().required('This field is required'),
            activated: yup.boolean().required('This field is required'),
        }),
        onSubmit(values) {
            saveEntity(values);
        },

    });

    const ErrorLabel = (props: {field :string}) => {
        const {field} = props;

        if ((formik.touched[field] || formik.submitCount > 0) && formik.errors[field]) {
            return (
                <Label className="text-destructive col-span-4 text-right">
                    {formik.errors[field]}
                </Label>
            )
        }
        return null
    }


    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[425px]" onInteractOutside={(e) => e.preventDefault()}>
                <form onSubmit={formik.handleSubmit} key={datasource.id ?? 'new'}>
                    <DialogHeader>
                        <DialogTitle>Add Datasource</DialogTitle>
                        <DialogDescription>
                            Make sure to add all the necessary information for your datasource.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        {
                            !isNew && (
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="id" className="text-right">
                                        ID
                                    </Label>
                                    <Input id="id" className="col-span-3"
                                           value={datasource.id}
                                           onChange={formik.handleChange}
                                           onBlur={formik.handleBlur}
                                           disabled
                                    />
                                </div>
                            )
                        }
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="title" className="text-right">
                                Title
                            </Label>
                            <Input id="title" className="col-span-3"
                                   value={formik.values.title}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                            />
                            <ErrorLabel field="title"/>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">
                                Description
                            </Label>
                            <Input id="description" className="col-span-3"
                                   value={formik.values.description}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                            />
                            <ErrorLabel field="description"/>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="activated" className="text-right">
                                Activated
                            </Label>
                            <Switch id="activated" className="col-span-3"
                                    checked={formik.values.activated}
                                    onCheckedChange={(checked) => formik.setFieldValue('activated', checked)}
                                    onBlur={formik.handleBlur}
                            />
                            <ErrorLabel field="activated"/>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">
                            {isNew ? 'Add' : 'Update'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
});


export default DatasourceUpdate