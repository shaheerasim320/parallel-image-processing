# Parallel Image Processing

This project is a parallel image processing application with a Next.js 16 frontend and FastAPI backend. It allows users to upload images, process them using serial or parallel execution, and view/download processed images along with performance metrics.

## 🏗️ Project Structure
```
src/
 ├─ app/
 │   ├─ processing/[sessionId]/page.jsx   # Page showing processing status
 │   ├─ results/[sessionId]/page.jsx      # Page showing metrics and processed images
 │   ├─ upload/page.jsx                   # Page for uploading images with modes
 │   ├─ layout.jsx                        # Root layout
 │   ├─ not_found.jsx                      # 404 page
 │   └─ page.jsx                          # Home page
 ├─ components/
 │   ├─ Navbar.jsx
 │   ├─ Footer.jsx
 │   ├─ Hero.jsx
 │   ├─ ImageGrid.jsx
 │   ├─ ProcessingCard.jsx
 │   ├─ Stats.jsx
 │   ├─ StatsCard.jsx
 │   ├─ StatusBadge.jsx
 │   ├─ Timeline.jsx
 │   ├─ UploadArea.jsx
 │   ├─ ConfigPanel.jsx
 │   ├─ ComparisionRow.jsx
 │   ├─ BackgroundDecor.jsx
 │   └─ ExecutionModes.jsx
 ├─ hooks/
 │   └─ useSimulation.jsx
 └─ lib/
     └─ api.js
```

## ⚡ Backend (FastAPI)
### Overview

The backend handles:

- Receiving uploaded images.
- Running serial and parallel image processing.
- Storing processed images and performance metrics.
- Returning job status and results to the frontend.

### Key Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /upload | Upload images to process. Returns a session_id. Supports two modes: auto (for layman users) and advanced (for users familiar with image processing). |
| GET | /status/{session_id} | Check processing status (processing, done, error). |
| GET | /results/{session_id} | Returns processed images and metrics if done. |
| GET | /outputs/{session_id}/{filename} | Download processed image (CORS-enabled). |

### Running the Backend

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the FastAPI server:

```bash
uvicorn main:app --reload
```

Runs at http://localhost:8000.

Processed images are saved in outputs/{session_id}/.

CORS is enabled for http://localhost:3000.

## 🌐 Frontend (Next.js 16)
### Overview

The frontend provides:

- Upload Page (/upload) – Users can select images and choose mode:
  - Auto Mode: Simple, layman-friendly.
  - Advanced Mode: Full control for users with image processing knowledge.
- Processing Page (/processing/[sessionId]) – Shows progress and status badges while images are being processed.
- Results Page (/results/[sessionId]) – Displays metrics, speedup, and processed images.
- Lazy loading and skeletons while fetching results (using react-loading-skeleton).
- Download images feature for processed images.
- Error handling – Redirects to not_found.jsx if session is invalid.

### Running the Frontend

Navigate to the frontend directory:

```bash
cd ui
```

Install dependencies:

```bash
npm install
```

Run the Next.js development server:

```bash
npm run dev
```

Runs at http://localhost:3000.

Ensure backend is running on http://localhost:8000.

### Components Overview
| Component | Purpose |
|-----------|---------|
| Navbar | Top navigation bar. |
| Footer | Bottom site footer. |
| Hero | Homepage hero section. |
| ImageGrid | Displays uploaded or processed images. |
| ProcessingCard | Shows progress/status per image or task. |
| Stats | Displays overall statistics. |
| StatsCard | Individual metric card. |
| StatusBadge | Shows processing status badge. |
| Timeline | Timeline of image processing steps. |
| UploadArea | Drag-and-drop upload area for images with mode selection. |
| ConfigPanel | Image processing configuration options. |
| ComparisionRow | Shows original vs processed image side-by-side. |
| BackgroundDecor | UI background decorations. |
| ExecutionModes | Shows serial/parallel execution modes and metrics. |

### Hooks
| Hook | Purpose |
|------|---------|
| useSimulation | Polls backend for job status or simulates processing in the frontend. |

### Libraries

Frontend:

- react, next
- react-hot-toast – notifications
- react-loading-skeleton – skeleton loaders

Backend:

- fastapi
- uvicorn
- python-multipart
- opencv-python
- numpy

## Important Notes

- CORS: Backend must allow requests from frontend origin (http://localhost:3000) for static files and API calls.
- Session Handling: results/[sessionId] fetches job results; if the session does not exist, the user is redirected to not_found.jsx.
- Lazy Loading: Metrics and images are shown as skeletons while fetching data.
- Speedup Calculation: Percentage improvement is calculated as (speedup - 1) * 100.
- Download Images: Processed images can be downloaded directly from /outputs/{session_id}/.
- Upload Modes: Users can select auto or advanced mode when uploading images.

### Deployment / WSGI / CORS Notes

- **CORS configuration**: Origins must match exactly. Trailing slashes, different schemes, or subdomains will break browser requests.  
  ```python
  allow_origins=["https://imgproc-lab.vercel.app"] 
  allow_origins=["https://imgproc-lab.vercel.app/"]

## How the App Works

1. User uploads images via /upload and selects mode.
2. Backend assigns session_id and starts background processing.
3. Frontend shows Processing Page until backend finishes.
4. When done:
   - Results Page displays metrics and processed images.
   - Download option is available.
5. Error handling:
   - Invalid session → redirect to not_found.jsx.
   - Backend/network failure → toast notification.
   