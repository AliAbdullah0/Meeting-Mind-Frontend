'use client'

import React, { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { RiBrain2Line, RiMic2Line, RiSparkling2Line, RiStopCircleLine, RiUpload2Line } from '@remixicon/react'

const Transcribe = () => {
  const [isDragging, setIsDragging] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [isRecording, setIsRecording] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => setIsDragging(false)

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith('audio/')) setUploadedFile(file)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) setUploadedFile(file)
  }

  const formatSize = (bytes: number) =>
    bytes < 1024 * 1024
      ? `${(bytes / 1024).toFixed(1)} KB`
      : `${(bytes / (1024 * 1024)).toFixed(1)} MB`

  return (
    <div className="min-h-screen bg-secondary flex flex-col">
      <div className="w-full px-8 py-6 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <RiBrain2Line className='text-primary text-xl'/>
          <span className="text-sm font-medium text-gray-700">Transcribe</span>
        </div>
        <Badge variant="outline" className="text-[11px] text-gray-400 font-normal gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300 inline-block" />
          No API connected
        </Badge>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row items-stretch">
        <div className="flex-1 flex flex-col items-center justify-center px-8 py-16 gap-6">
          <div className="text-center mb-2">
            <p className="text-[11px] uppercase tracking-[0.18em] text-gray-400 mb-2">Audio file</p>
            <h2 className="font-serif text-2xl md:text-3xl font-normal text-gray-900">
              Upload & transcribe
            </h2>
          </div>
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`
              w-full max-w-md border-2 border-dashed rounded-2xl px-8 py-12
              flex flex-col items-center gap-4 cursor-pointer
              transition-all duration-200
              ${isDragging
                ? 'border-primary bg-primary/5 scale-[1.01]'
                : uploadedFile
                ? 'border-primary/40 bg-primary/3'
                : 'border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50'
              }
            `}
          >
            <Input
              ref={fileInputRef}
              type="file"
              accept="audio/*"
              className="hidden"
              onChange={handleFileChange}
            />

            {uploadedFile ? (
              <>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <i className="ri-file-music-line text-primary text-2xl" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-800 truncate max-w-[220px]">
                    {uploadedFile.name}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{formatSize(uploadedFile.size)}</p>
                </div>
                <Button
                  size="sm"
                  className="bg-primary text-white text-xs px-5 rounded-lg gap-2"
                >
                  <RiSparkling2Line />
                  Transcribe file
                </Button>
                <button
                  onClick={(e) => { e.stopPropagation(); setUploadedFile(null) }}
                  className="text-[11px] text-gray-400 hover:text-gray-600 transition-colors"
                >
                  Remove file
                </button>
              </>
            ) : (
              <>
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                  {/* <i className="ri-upload-cloud-2-line text-gray-400 text-2xl" /> */}
                  <RiUpload2Line className='text-accent text-2xl'/>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-700">
                    Drop your audio file here
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    or click to browse · MP3, WAV, M4A, FLAC
                  </p>
                </div>
              </>
            )}
          </div>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {['MP3', 'WAV', 'M4A', 'FLAC', 'OGG'].map((fmt) => (
              <span
                key={fmt}
                className="text-[10px] font-mono text-gray-400 border border-gray-200 rounded px-1.5 py-0.5"
              >
                {fmt}
              </span>
            ))}
          </div>
        </div>
        <div className="flex lg:flex-col items-center justify-center px-4 py-4 lg:py-0 gap-3">
          <div className="flex-1 lg:w-px lg:h-auto w-auto h-px bg-gray-200" />
          <span className="text-[11px] uppercase tracking-widest text-gray-300 font-medium lg:[writing-mode:vertical-lr] lg:rotate-180">
            or
          </span>
          <div className="flex-1 lg:w-px lg:h-auto w-auto h-px bg-gray-200" />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center px-8 py-16 gap-6">
          <div className="text-center mb-2">
            <p className="text-[11px] uppercase tracking-[0.18em] text-gray-400 mb-2">Live</p>
            <h2 className="font-serif text-2xl md:text-3xl font-normal text-gray-900">
              Real-time transcription
            </h2>
          </div>
          <div className="relative flex items-center justify-center">
            {isRecording && (
              <>
                <span className="absolute w-32 h-32 rounded-full bg-red-400/20 animate-ping" />
                <span className="absolute w-24 h-24 rounded-full bg-red-400/15 animate-ping [animation-delay:0.3s]" />
              </>
            )}
            <Button
              onClick={() => setIsRecording(!isRecording)}
              className={`
                relative w-20 h-20 rounded-full flex items-center justify-center
                transition-all duration-300 shadow-sm
                ${isRecording
                  ? 'bg-red-500 hover:bg-red-600 scale-105'
                  : 'bg-primary hover:bg-primary/90'
                }
              `}
            >
                {isRecording ? <RiStopCircleLine className='text-2xl'/> : <RiMic2Line className='text-2xl'/>} 
            </Button>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-sm font-medium text-gray-700">
              {isRecording ? 'Recording in progress...' : 'Start live transcription'}
            </p>
            <p className="text-xs text-gray-400">
              {isRecording
                ? 'Click the button to stop'
                : 'Uses your device microphone'}
            </p>
          </div>
          <Button
            variant={isRecording ? 'destructive' : 'outline'}
            onClick={() => setIsRecording(!isRecording)}
            className={`
              gap-2 text-sm px-6 rounded-lg
              ${!isRecording && 'border-gray-200 text-gray-600 hover:border-gray-300'}
            `}
          >
            <i className={`${isRecording ? 'ri-stop-circle-line' : 'ri-mic-2-line'} text-base`} />
            {isRecording ? 'Stop recording' : 'Start recording'}
          </Button>
          <div className="w-full max-w-xs bg-white border border-gray-100 rounded-xl p-4 flex flex-col gap-2.5 mt-2">
            {[
              { icon: 'ri-checkbox-circle-line', text: 'Speak clearly near your mic' },
              { icon: 'ri-checkbox-circle-line', text: 'Works in any language' },
              { icon: 'ri-checkbox-circle-line', text: 'Transcription appears in real-time' },
            ].map((tip) => (
              <div key={tip.text} className="flex items-center gap-2.5">
                <i className={`${tip.icon} text-primary text-sm`} />
                <p className="text-xs text-gray-500">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transcribe