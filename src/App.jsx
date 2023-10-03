import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ReactFlow, {
  Background,
  Controls,
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";
import "reactflow/dist/style.css";
import "./App.css";
import React, { useCallback } from "react";
const initialNodes = [
  {
    id: "1",
    data: { label: "Ruchita" },
    position: { x: 0, y: 0 },
    type: "input",
  },
  {
    id: "2",
    data: { label: "Ankita" },
    position: { x: 100, y: 100 },
  },
  {
    id: "3",
    data: { label: "Nikita" },
    position: { x: 200, y: 200 },
  },
  {
    id: "4",
    data: { label: "Neha" },
    position: { x: 300, y: 300 },
  },
  {
    id: "5",
    data: { label: "Sonali" },
    position: { x: 400, y: 400 },
  },
];
const initialEdges = [
  {
    id: "1-2",
    source: "1",
    target: "2",
    label: "go to the ankita",
    type: "step",
  },
  {
    id: "1-3",
    source: "1",
    target: "3",
    label: "go to the nikita",
    type: "step",
  },
  {
    id: "2-4",
    source: "2",
    target: "4",
    label: "go to the neha",
    type: "step",
  },
  {
    id: "3-5",
    source: "3",
    target: "5",
    label: "go to the sonali",
    type: "step",
  },
];

function App() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [count, setCount] = useState(0);
  const [variant, setVariant] = useState("cross");
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  return (
    <div style={{ height: 1000 }}>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
      >
        <Background variant={variant} color="green" gap="50" />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default App;
