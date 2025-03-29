import Select from "react-select";
import { products } from "../utils/products";

const options = [
    { value: "luoc", label: "Lược Sừng Trâu" },
    { value: "massage", label: "Dụng Cụ Massage Sừng Trâu" },
    { value: "phu-kien", label: "Phụ Kiện Sừng Trâu" },
];

const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: "#432818",
        color: "white",
        borderRadius: "5px",
        border: "none",
        boxShadow: "none",
        width: "fit-content",
        height: "40px",
        cursor: "pointer",
        marginLeft: "auto",
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? " #432818" : "white",
        color: state.isSelected ? "white" : " #432818",
        "&:hover": {
            backgroundColor: " #432818",
            color: "white",
        },
    }),
    singleValue: (provided) => ({
        ...provided,
        color: "white",
    }),
};

const FilterSelect = ({ setFilterList }) => {
    const handleChange = (selectedOption) => {
        setFilterList(
            products.filter((item) => item.category === selectedOption.value)
        );
    };
    return (
        <Select
            options={options}
            defaultValue={{ value: "", label: "Lọc theo danh mục" }}
            styles={customStyles}
            onChange={handleChange}
        />
    );
};

export default FilterSelect;
