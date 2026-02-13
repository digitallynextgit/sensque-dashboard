"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Bot, Play, FileText, Zap, CheckCircle, Clock, Upload } from "lucide-react";
import { MainLayout } from "@/components/layout/main-layout";
import { useState } from "react";

export default function TestGenAIPage() {
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
          <h2 className="text-3xl font-bold tracking-tight">SensuQ TestGen AI</h2>
          <div className="flex items-center space-x-2">
            <Button>
              <Play className="mr-2 h-4 w-4" />
              Generate Tests
            </Button>
          </div>
        </div>

        {/* Test Case Generation Section */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Test Case Generation</CardTitle>
            <CardDescription>Generate Test Cases Based on Requirements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Requirements Section */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Requirements</label>
              <Textarea
                placeholder="Enter your Requirements here (e.g., The user should be able to log in with valid credentials and receive an error for invalid credentials.)..."
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
                  onClick={() => document.getElementById('file-upload')?.click()}
                  className="flex items-center gap-2"
                >
                  <Upload className="h-4 w-4" />
                  Browse...
                </Button>
                <span className="text-sm text-muted-foreground">
                  {selectedFile ? selectedFile.name : "No file selected."}
                </span>
                <input
                  id="file-upload"
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
                Generate Test Cases
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tests Generated</CardTitle>
              <Bot className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,247</div>
              <p className="text-xs text-muted-foreground">
                +12% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94.2%</div>
              <p className="text-xs text-muted-foreground">
                +2.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Generation Time</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.3s</div>
              <p className="text-xs text-muted-foreground">
                -0.5s from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">
                +3 from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>AI Test Generation</CardTitle>
              <CardDescription>
                Generate comprehensive test cases using advanced AI algorithms
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Recent Test Generations</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Bot className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="text-sm font-medium">User Authentication Tests</p>
                        <p className="text-xs text-muted-foreground">Generated 45 test cases</p>
                      </div>
                    </div>
                    <Badge variant="secondary">Completed</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Bot className="h-5 w-5 text-accent" />
                      <div>
                        <p className="text-sm font-medium">API Integration Tests</p>
                        <p className="text-xs text-muted-foreground">Generated 32 test cases</p>
                      </div>
                    </div>
                    <Badge variant="secondary">Completed</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Bot className="h-5 w-5 text-accent" />
                      <div>
                        <p className="text-sm font-medium">UI Component Tests</p>
                        <p className="text-xs text-muted-foreground">Generating 28 test cases</p>
                      </div>
                    </div>
                    <Badge variant="outline">In Progress</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Test Categories</CardTitle>
              <CardDescription>
                AI-powered test generation across different categories
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Zap className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm">Unit Tests</span>
                  </div>
                  <span className="text-sm font-medium">456</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Zap className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">Integration Tests</span>
                  </div>
                  <span className="text-sm font-medium">234</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Zap className="h-4 w-4 text-accent" />
                    <span className="text-sm">E2E Tests</span>
                  </div>
                  <span className="text-sm font-medium">123</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Zap className="h-4 w-4 text-purple-500" />
                    <span className="text-sm">Performance Tests</span>
                  </div>
                  <span className="text-sm font-medium">89</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}