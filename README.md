# WanderMesh – Social Travel Experience Platform

WanderMesh is a curated travel platform designed to bring together like-minded individuals through shared travel experiences. It transforms solo travel into structured, community-driven journeys.

This application captures user intent for curated trips through an invite-based flow, enabling efficient lead collection and user qualification.

---

## Overview

The platform enables users to express interest in upcoming travel experiences by submitting structured information, including personal details and travel preferences. The system is designed to support scalable lead capture and future expansion into a full travel management ecosystem.

---

## Core Capabilities

- Structured user intake for curated travel experiences  
- Real-time data capture and storage  
- Secure database access with controlled policies  
- Clean, responsive interface optimized for conversion  

---

## Technology Stack

Frontend:
- React (TypeScript)
- Vite

Backend / Data Layer:
- Supabase (PostgreSQL with managed APIs)

Deployment:
- Vercel

---

## System Architecture


Client Application → Supabase (Database & API)


The system leverages Supabase to manage both data storage and API interactions, eliminating the need for a separate backend service at this stage.

---

## Data Model

The platform captures structured user data including:

- Personal identifiers (name, gender, contact details)  
- Social presence (Instagram handle)  
- Professional background  
- Trip preference  
- User intent and motivation  

---

## Security Considerations

- Row Level Security (RLS) enabled on all tables  
- Controlled insert policies for data integrity  
- Environment variables used for sensitive configuration  

---

## Product Direction

WanderMesh is evolving toward a full-stack travel platform with:

- Lead management and internal dashboards  
- Intelligent user segmentation  
- Automated communication workflows  
- Personalized travel experiences  

---

## Ownership

This repository contains proprietary work related to WanderMesh.  
All rights reserved.