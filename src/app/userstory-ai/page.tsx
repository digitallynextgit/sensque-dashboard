"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Plus, BookOpen, Target, Users, Upload, CheckCircle } from "lucide-react";
import { MainLayout } from "@/components/layout/main-layout";
import * as React from "react";
import { useState } from "react";

export default function UserStoryAIPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [requirements, setRequirements] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">SensuQ UserStory AI</h2>
          <div className="flex items-center space-x-2">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Generate Story
            </Button>
          </div>
        </div>

        {/* User Story Generation Section */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">User Story Generation</CardTitle>
            <CardDescription>Generate User Stories or Upload Existing ones</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Requirements Section */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">High Level Idea</label>
              <Textarea
                placeholder="Enter your High Level Idea here..."
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                className="min-h-[120px] resize-none"
              />
            </div>

            {/* OR Divider */}
            <div className="flex items-center justify-center">
              <div className="flex-grow border-t border-border"></div>
              <span className="px-4 text-sm text-muted-foreground bg-background">or</span>
              <div className="flex-grow border-t border-border"></div>
            </div>

            {/* File Upload Section */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-foreground">Upload File</label>
                <span className="text-xs text-muted-foreground">(Accepts only .txt, .md, .docx)</span>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  onClick={() => document.getElementById('file-upload-userstory')?.click()}
                  className="flex items-center gap-2"
                >
                  <Upload className="h-4 w-4" />
                  Browse...
                </Button>
                <span className="text-sm text-muted-foreground">
                  {selectedFile ? selectedFile.name : "No file selected."}
                </span>
                <input
                  id="file-upload-userstory"
                  type="file"
                  accept=".txt,.md,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
            </div>

            {/* Generate Button */}
            <div className="pt-4">
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2"
                disabled={!requirements.trim() && !selectedFile}
              >
                Generate User Stories
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Stories Generated</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">892</div>
              <p className="text-xs text-muted-foreground">
                +18% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Acceptance Rate</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87.5%</div>
              <p className="text-xs text-muted-foreground">
                +5.2% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Story Length</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">
                words per story
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Epics</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                +2 from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Recent User Stories</CardTitle>
              <CardDescription>
                AI-generated user stories for your projects
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-4 border rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">Epic: Authentication</Badge>
                    <Badge variant="outline">High Priority</Badge>
                  </div>
                  <h4 className="font-medium">User Login with Multi-Factor Authentication</h4>
                  <p className="text-sm text-muted-foreground">
                    As a registered user, I want to log in with multi-factor authentication
                    so that my account remains secure from unauthorized access.
                  </p>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span>Story Points: 8</span>
                    <span>Generated: 2 hours ago</span>
                  </div>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">Epic: Dashboard</Badge>
                    <Badge variant="outline">Medium Priority</Badge>
                  </div>
                  <h4 className="font-medium">Customizable Dashboard Widgets</h4>
                  <p className="text-sm text-muted-foreground">
                    As a business user, I want to customize my dashboard widgets
                    so that I can view the most relevant information at a glance.
                  </p>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span>Story Points: 5</span>
                    <span>Generated: 4 hours ago</span>
                  </div>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">Epic: Reporting</Badge>
                    <Badge variant="outline">Low Priority</Badge>
                  </div>
                  <h4 className="font-medium">Automated Report Generation</h4>
                  <p className="text-sm text-muted-foreground">
                    As a manager, I want to schedule automated reports
                    so that I can receive regular updates without manual intervention.
                  </p>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span>Story Points: 13</span>
                    <span>Generated: 1 day ago</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Story Analytics</CardTitle>
              <CardDescription>
                Insights into your user story generation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Authentication Stories</span>
                  </div>
                  <span className="text-sm font-medium">24</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span className="text-sm">Dashboard Stories</span>
                  </div>
                  <span className="text-sm font-medium">18</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">Reporting Stories</span>
                  </div>
                  <span className="text-sm font-medium">15</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">Integration Stories</span>
                  </div>
                  <span className="text-sm font-medium">12</span>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h4 className="text-sm font-medium mb-3">Story Quality Metrics</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Clarity Score</span>
                    <span className="font-medium">9.2/10</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Completeness</span>
                    <span className="font-medium">8.7/10</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Testability</span>
                    <span className="font-medium">9.0/10</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}