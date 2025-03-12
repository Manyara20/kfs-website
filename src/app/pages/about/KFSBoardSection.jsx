// src/app/pages/about/KFSBoardSection.jsx
"use client";
import { colors } from '@mui/material';
import Link from 'next/link';

export default function KFSBoardSection() {
  return (
    <div style={{ padding: '2rem', margin: '0 auto', font: 'black' }}>
      {/* Page Content */}
      <h1>KFS Board</h1>
      <p>
        The Kenya Forest Service (KFS) Board is composed of dedicated individuals who guide our organization’s mission to conserve, protect, and manage Kenya’s forest resources for sustainable development.
      </p>
      <div style={{ marginTop: '2rem' }}>
        <h2>Board Members</h2>
        <ul>
          <li>
            <strong>John Doe</strong> - Chairman
            <p>John has over 20 years of experience in environmental leadership and has been with KFS since its inception.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}