import React, { useEffect } from 'react';
// @ts-ignore
import { Scene, Entity } from 'aframe-react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import sky from './models/Bliss_(Windows_XP).png';
// @ts-ignore
import anim_1 from './models/Starwars3.glb';


export function App() {
    useEffect(() => {
        const loader = new GLTFLoader();

        loader.load(anim_1, (gltf) => {
            const entity: any = document.getElementById('anim1');
            entity.object3D.add(gltf.scene);
        });
    }, []);

    return (
        <div>
            <Scene>
                <Entity primitive="a-assets">
                    <img id="sky" src={sky} alt="stars" />
                </Entity>

                <Entity id="anim1" position={{ x: -1, y: 0, z: -3 }} scale="1 1 1"></Entity>
                <Entity primitive="a-sky" color="#FFFFFF" material={`src:#sky`} rotation={{ x: 0, y: 0, z: 0 }} />
            </Scene>
        </div>
    );
}
