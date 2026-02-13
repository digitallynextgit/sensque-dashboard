"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Palette, Eye, Layers, TrendingUp, Upload, Zap } from "lucide-react";
import { MainLayout } from "@/components/layout/main-layout";
import * as React from "react";
import { useState } from "react";

export default function UIUXAIPage() {
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
          <h2 className="text-3xl font-bold tracking-tight">SensuQ UI/UX AI</h2>
          <div className="flex items-center space-x-2">
            <Button>
              <Sparkles className="mr-2 h-4 w-4" />
              Generate Design
            </Button>
          </div>
        </div>

        {/* UI/UX Design Generation Section */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">UI/UX Design Generation</CardTitle>
            <CardDescription>Generate UI/UX Designs or Upload Existing ones</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Requirements Section */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Design Requirements</label>
              <Textarea
                placeholder="Enter your design requirements here..."
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
                  onClick={() => document.getElementById('file-upload-uiux')?.click()}
                  className="flex items-center gap-2"
                >
                  <Upload className="h-4 w-4" />
                  Browse...
                </Button>
                <span className="text-sm text-muted-foreground">
                  {selectedFile ? selectedFile.name : "No file selected."}
                </span>
                <input
                  id="file-upload-uiux"
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
                Generate UI/UX Designs
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Accessibility Check Section */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Accessibility Check</CardTitle>
            <CardDescription>Run an Accessibility check on your Website</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Website URL Section */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Website URL</label>
              <input
                type="url"
                placeholder="Enter website URL..."
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              />
            </div>

            {/* Generate Button */}
            <div className="pt-4">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2">
                Run Accessibility Check
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Designs Generated</CardTitle>
              <Palette className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">456</div>
              <p className="text-xs text-muted-foreground">
                +23% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">UX Score</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8.9/10</div>
              <p className="text-xs text-muted-foreground">
                +0.3 from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Components Created</CardTitle>
              <Layers className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">
                +156 from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">User Satisfaction</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">92%</div>
              <p className="text-xs text-muted-foreground">
                +4% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>AI Design Generation</CardTitle>
              <CardDescription>
                Create stunning UI/UX designs with AI-powered tools
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-4 border rounded-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">E-commerce Dashboard</h4>
                    <Badge variant="secondary">Completed</Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded border-2 border-blue-300"></div>
                    <div className="h-20 bg-gradient-to-br from-accent-100 to-accent-200 rounded border-2 border-accent-300"></div>
                    <div className="h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded border-2 border-purple-300"></div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>3 variants generated</span>
                    <span>UX Score: 9.2/10</span>
                  </div>
                </div>

                <div className="p-4 border rounded-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Mobile Banking App</h4>
                    <Badge variant="outline">In Progress</Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded border-2 border-orange-300"></div>
                    <div className="h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded border-2 border-primary-300"></div>
                    <div className="h-20 bg-muted rounded border-2 border-dashed border-border flex items-center justify-center">
                      <Zap className="h-6 w-6 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>2/3 variants completed</span>
                    <span>Generating...</span>
                  </div>
                </div>

                <div className="p-4 border rounded-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">SaaS Landing Page</h4>
                    <Badge variant="secondary">Completed</Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-20 bg-gradient-to-br from-pink-100 to-pink-200 rounded border-2 border-pink-300"></div>
                    <div className="h-20 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded border-2 border-indigo-300"></div>
                    <div className="h-20 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded border-2 border-yellow-300"></div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>3 variants generated</span>
                    <span>UX Score: 8.7/10</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Design Analytics</CardTitle>
              <CardDescription>
                Performance metrics for your AI-generated designs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Web Applications</span>
                  </div>
                  <span className="text-sm font-medium">156</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span className="text-sm">Mobile Apps</span>
                  </div>
                  <span className="text-sm font-medium">89</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">Landing Pages</span>
                  </div>
                  <span className="text-sm font-medium">67</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-sm">Components</span>
                  </div>
                  <span className="text-sm font-medium">234</span>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h4 className="text-sm font-medium mb-3">Design Quality Metrics</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Accessibility Score</span>
                    <span className="font-medium">9.1/10</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Visual Appeal</span>
                    <span className="font-medium">8.8/10</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Usability</span>
                    <span className="font-medium">9.3/10</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Responsiveness</span>
                    <span className="font-medium">9.0/10</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h4 className="text-sm font-medium mb-3">Popular Design Patterns</h4>
                <div className="space-y-2">
                  <Badge variant="outline" className="mr-2 mb-2">Card Layouts</Badge>
                  <Badge variant="outline" className="mr-2 mb-2">Hero Sections</Badge>
                  <Badge variant="outline" className="mr-2 mb-2">Navigation Bars</Badge>
                  <Badge variant="outline" className="mr-2 mb-2">Form Designs</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}