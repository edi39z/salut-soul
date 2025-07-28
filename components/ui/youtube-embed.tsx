"use client"

import React from "react"
import { AnimatedSection } from "./animated-section"

interface YoutubeEmbedProps {
  embedId: string
  title: string
}

export const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ embedId, title }) => (
  <AnimatedSection direction="right">
    <div className="relative overflow-hidden rounded-xl shadow-2xl" style={{ paddingTop: "56.25%" }}>
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${embedId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </AnimatedSection>
)
