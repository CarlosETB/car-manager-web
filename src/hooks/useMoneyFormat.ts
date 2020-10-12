export default () => {
    const handleMoneyFormat = (num?: number) => {
        return "R$ " + num?.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + ",00";
    };

    return { handleMoneyFormat }
};