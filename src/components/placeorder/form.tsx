"use client";

import { useForm, Controller } from "react-hook-form";
import {
    TextField,
    Select,
    MenuItem,
    Button,
    Checkbox,
    FormControlLabel,
    InputLabel,
    FormControl,
} from "@mui/material";

export default function Form() {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            pickUpPoint: "",
            dropOffPoint: "",
            period: "",
            date: "",
            name: "",
            email: "",
            phone: "",
            birthday: "",
            acceptPermission: false,
        },
    });

    const onSubmit = (data: any) => {
        console.log("Form submitted:", data);
        alert("Form submitted successfully!");
    };

    return (
        <div className="flex justify-center items-center">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-lg p-6 rounded-lg shadow-lg space-y-6"
            >

                {/* Pick-Up Point */}
                <Controller
                    name="pickUpPoint"
                    control={control}
                    render={({ field }) => (
                        <FormControl fullWidth>
                            <InputLabel sx={{ color: "white" }}>Pick-Up Point</InputLabel>
                            <Select
                                {...field}
                                sx={{
                                    color: "white",
                                    ".MuiOutlinedInput-notchedOutline": { borderColor: "white", opacity: 0.5 },
                                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#1c4eff" },
                                    "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
                                }}
                            >
                                <MenuItem value="location1">Location 1</MenuItem>
                                <MenuItem value="location2">Location 2</MenuItem>
                                <MenuItem value="location3">Location 3</MenuItem>
                            </Select>
                        </FormControl>
                    )}
                />

                {/* Drop-Off Point */}
                <Controller
                    name="dropOffPoint"
                    control={control}
                    render={({ field }) => (
                        <FormControl fullWidth>
                            <InputLabel sx={{ color: "white" }}>Drop-Off Point</InputLabel>
                            <Select
                                {...field}
                                sx={{
                                    color: "white",
                                    ".MuiOutlinedInput-notchedOutline": { borderColor: "white", opacity: 0.5 },
                                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#1c4eff" },
                                    "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
                                }}
                            >
                                <MenuItem value="location1">Location 1</MenuItem>
                                <MenuItem value="location2">Location 2</MenuItem>
                                <MenuItem value="location3">Location 3</MenuItem>
                            </Select>
                        </FormControl>
                    )}
                />

                {/* Period */}
                <Controller
                    name="period"
                    control={control}
                    render={({ field }) => (
                        <FormControl fullWidth>
                            <InputLabel sx={{ color: "white" }}>Period</InputLabel>
                            <Select
                                {...field}
                                sx={{
                                    color: "white",
                                    ".MuiOutlinedInput-notchedOutline": { borderColor: "white", opacity: 0.5 },
                                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#1c4eff" },
                                    "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
                                }}
                            >
                                <MenuItem value="morning">Morning</MenuItem>
                                <MenuItem value="afternoon">Afternoon</MenuItem>
                                <MenuItem value="evening">Evening</MenuItem>
                            </Select>
                        </FormControl>
                    )}
                />

                {/* Date */}
                <Controller
                    name="date"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            fullWidth
                            type="date"
                            label="Date"
                            InputLabelProps={{ shrink: true, style: { color: "white" } }}
                            sx={{
                                input: { color: "white" },
                                ".MuiOutlinedInput-notchedOutline": { borderColor: "white", opacity: 0.5 },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#1c4eff" },
                                "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
                            }}
                        />
                    )}
                />

                {/* Name */}
                <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            fullWidth
                            label="Name"
                            InputLabelProps={{ style: { color: "white" } }}
                            sx={{
                                input: { color: "white" },
                                ".MuiOutlinedInput-notchedOutline": { borderColor: "white", opacity: 0.5 },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#1c4eff" },
                                "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
                            }}
                        />
                    )}
                />

                {/* Email */}
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            fullWidth
                            type="email"
                            label="Email"
                            InputLabelProps={{ style: { color: "white" } }}
                            sx={{
                                input: { color: "white" },
                                ".MuiOutlinedInput-notchedOutline": { borderColor: "white", opacity: 0.5 },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#1c4eff" },
                                "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
                            }}
                        />
                    )}
                />

                {/* Phone */}
                <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            fullWidth
                            type="tel"
                            label="Phone"
                            InputLabelProps={{ style: { color: "white" } }}
                            sx={{
                                input: { color: "white" },
                                ".MuiOutlinedInput-notchedOutline": { borderColor: "white", opacity: 0.5 },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#1c4eff" },
                                "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
                            }}
                        />
                    )}
                />

                {/* Birthday */}
                <Controller
                    name="birthday"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            fullWidth
                            type="date"
                            label="Birthday"
                            InputLabelProps={{ shrink: true, style: { color: "white" } }}
                            sx={{
                                input: { color: "white" },
                                ".MuiOutlinedInput-notchedOutline": { borderColor: "white", opacity: 0.5 },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#1c4eff" },
                                "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
                            }}
                        />
                    )}
                />

                {/* Accept Permission */}
                <Controller
                    name="acceptPermission"
                    control={control}
                    render={({ field }) => (
                        <FormControlLabel
                            control={
                                <Checkbox
                                    {...field}
                                    checked={field.value}
                                    sx={{
                                        color: "white",
                                        "&.Mui-checked": { color: "#1c4eff" },
                                    }}
                                />
                            }
                            label={
                                <span style={{ color: "white" }}>
                                    I accept the terms and conditions
                                </span>
                            }
                        />
                    )}
                />

                {/* Submit Button */}
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                        backgroundColor: "#1c4eff",
                        "&:hover": { backgroundColor: "#145dcc" },
                    }}
                >
                    Submit
                </Button>
            </form>
        </div>
    );
}
