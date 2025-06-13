import { Header_Buttons} from "../components/Header_Buttons"
import { Layout } from "../components/layout/Layout"

export const ComponentsLearning = () => {


    return (
        <Layout>

            <div style={{
                flex: 1,
                background: 'transparent',
                backdropFilter: "blur(10px)",
                padding: "1rem",
            }}>
                <h2 style={{
                    position: 'relative',
                    bottom: '1.2rem',
                }}>Aprende con InsideOut</h2>
                <p style={{
                    position: 'relative',
                    bottom: '1.8rem',
                }}>
                    Descubre tutoriales prácticos y consejos fáciles para dominar  tu computadora y resolver problemas comunes.
                </p>

                <Header_Buttons />

            </div>

        </Layout>
    )
}