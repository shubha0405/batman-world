import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function RainEffect() {

    const particlesInit = async (engine) => {
        await loadSlim(engine);
    };

    return (

        <Particles

            id="rain"

            init={particlesInit}

            options={{

                fullScreen:false,

                particles:{

                    number:{
                        value:220
                    },

                    color:{
                        value:"#87CEFA"
                    },

                    move:{
                        direction:"bottom",
                        enable:true,
                        speed:20,
                        straight:true
                    },

                    shape:{
                        type:"line"
                    },

                    opacity:{
                        value:.35
                    },

                    size:{
                        value:{
                            min:12,
                            max:20
                        }
                    }

                }

            }}

        />

    )

}

export default RainEffect;