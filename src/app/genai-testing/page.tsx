"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TestTube, Play, Sparkles, CheckCircle, Clock } from "lucide-react";
import { MainLayout } from "@/components/layout/main-layout";

export default function GenAITestingPage() {
    return (
        <MainLayout>
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold tracking-tight">SensuQ GenAI Testing</h2>
                    <div className="flex items-center space-x-2">
                        <Button>
                            <Play className="mr-2 h-4 w-4" />
                            Run Tests
                        </Button>
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">AI Models Tested</CardTitle>
                            <TestTube className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">8</div>
                            <p className="text-xs text-muted-foreground">+2 this month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Test Scenarios</CardTitle>
                            <Sparkles className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">342</div>
                            <p className="text-xs text-muted-foreground">+45 from last month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Pass Rate</CardTitle>
                            <CheckCircle className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">91.5%</div>
                            <p className="text-xs text-muted-foreground">+3.2% from last month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
                            <Clock className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">1.8s</div>
                            <p className="text-xs text-muted-foreground">-0.3s from last month</p>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>GenAI Testing Suite</CardTitle>
                        <CardDescription>
                            Test and validate generative AI models for reliability and accuracy
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <div className="flex items-center justify-between p-3 border rounded-lg">
                                <div className="flex items-center space-x-3">
                                    <TestTube className="h-5 w-5 text-blue-500" />
                                    <div>
                                        <p className="text-sm font-medium">LLM Response Accuracy</p>
                                        <p className="text-xs text-muted-foreground">Testing 120 prompts</p>
                                    </div>
                                </div>
                                <Badge variant="secondary">Completed</Badge>
                            </div>
                            <div className="flex items-center justify-between p-3 border rounded-lg">
                                <div className="flex items-center space-x-3">
                                    <TestTube className="h-5 w-5 text-yellow-500" />
                                    <div>
                                        <p className="text-sm font-medium">Hallucination Detection</p>
                                        <p className="text-xs text-muted-foreground">Analyzing 85 outputs</p>
                                    </div>
                                </div>
                                <Badge variant="outline">In Progress</Badge>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </MainLayout>
    );
}
