import Barchart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const Dashboard = () => {

    return (
        <>
            <NavBar/>
            <div className="container">
                <h1 className="text-primary py-3">Dashboard de vendas</h1>
                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
                        <Barchart />
                    </div>

                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Total de vendas</h5>
                        <DonutChart/>
                    </div>
                    <h1 className="text-primary pt-5 pb-2"> Todas as vendas</h1>
                </div>


                <DataTable />
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;