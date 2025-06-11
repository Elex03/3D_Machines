import React from "react";
import ModelViewer from "../components/ModelViewer";
import { ModelAnimatedViewer } from "../components/ModelAnimatedViewer";
import InfoPanel from "../components/InfoPanel";
import { Layout } from "../components/layout/Layout";

export const ComponentsDetails = () => {
  return (
    <Layout>
      <div
        style={{
          flex: 1,
          background: "transparent",
          backdropFilter: "blur(10px)",
          padding: "1rem",
        }}
      >
        <ModelViewer modelName="model.glb" />
      </div>
      <div style={{ flex: 1, display: "flex", width: "900px" }}>
        <InfoPanel />
        <ModelAnimatedViewer modelName="robot.glb" />
      </div>
    </Layout>
  );
};
