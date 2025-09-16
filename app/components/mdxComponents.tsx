// src/mdx-components.tsx
import React from "react";
import defaultMdxComponents from "fumadocs-ui/mdx";

import { Steps, Step } from "fumadocs-ui/components/steps";
import { Callout } from "fumadocs-ui/components/callout";
import { CodeBlock } from "fumadocs-ui/components/codeblock";
import { Tabs, Tab } from "fumadocs-ui/components/tabs";
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';

import Video from "@/components/Video";


export const mdxComponents = {
  ...defaultMdxComponents,

  Steps,
  Step,
  Callout,
  CodeBlock,
  Tabs,
  Tab,
  Video,
  Accordion,
  Accordions,
  DynamicCodeBlock
};
