"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MainLayout } from "@/components/layout/main-layout";

export default function ReportsPage() {
    return (
        <MainLayout>
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold tracking-tight">Reports</h2>
                    <Button>
                        <Download className="mr-2 h-4 w-4" />
                        Export All
                    </Button>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-lg">Monthly Summary</CardTitle>
                                <Badge variant="secondary">New</Badge>
                            </div>
                            <CardDescription>Generated on Feb 1, 2026</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center space-x-3">
                                <FileText className="h-8 w-8 text-blue-500" />
                                <div>
                                    <p className="text-sm">Complete overview of monthly activities</p>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        <Calendar className="h-3 w-3 inline mr-1" />
                                        January 2026
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Test Coverage Report</CardTitle>
                            <CardDescription>Generated on Jan 28, 2026</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center space-x-3">
                                <FileText className="h-8 w-8 text-green-500" />
                                <div>
                                    <p className="text-sm">AI-generated test coverage analysis</p>
                                    <p className="text-xs text-muted-foreground mt-1">Coverage: 87.3%</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Performance Report</CardTitle>
                            <CardDescription>Generated on Jan 25, 2026</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center space-x-3">
                                <FileText className="h-8 w-8 text-purple-500" />
                                <div>
                                    <p className="text-sm">System performance and uptime metrics</p>
                                    <p className="text-xs text-muted-foreground mt-1">Uptime: 99.9%</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </MainLayout>
    );
}
