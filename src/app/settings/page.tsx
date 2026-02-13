"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { User, Bell, Shield } from "lucide-react";
import { MainLayout } from "@/components/layout/main-layout";

export default function SettingsPage() {
    return (
        <MainLayout>
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
                </div>

                <div className="grid gap-6">
                    {/* Profile Settings */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center space-x-2">
                                <User className="h-5 w-5" />
                                <CardTitle>Profile Settings</CardTitle>
                            </div>
                            <CardDescription>Manage your account settings</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Display Name</Label>
                                    <Input id="name" placeholder="Your name" defaultValue="Admin User" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="Your email" defaultValue="admin@sensuq.com" />
                                </div>
                            </div>
                            <Button>Save Changes</Button>
                        </CardContent>
                    </Card>

                    <Separator />

                    {/* Notification Settings */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center space-x-2">
                                <Bell className="h-5 w-5" />
                                <CardTitle>Notifications</CardTitle>
                            </div>
                            <CardDescription>Configure notification preferences</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium">Email Notifications</p>
                                    <p className="text-xs text-muted-foreground">Receive email updates</p>
                                </div>
                                <Switch defaultChecked />
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium">Push Notifications</p>
                                    <p className="text-xs text-muted-foreground">Receive push notifications</p>
                                </div>
                                <Switch />
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium">Test Completion Alerts</p>
                                    <p className="text-xs text-muted-foreground">Alert when tests complete</p>
                                </div>
                                <Switch defaultChecked />
                            </div>
                        </CardContent>
                    </Card>

                    <Separator />

                    {/* Security Settings */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center space-x-2">
                                <Shield className="h-5 w-5" />
                                <CardTitle>Security</CardTitle>
                            </div>
                            <CardDescription>Manage security settings</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="current-password">Current Password</Label>
                                <Input id="current-password" type="password" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="new-password">New Password</Label>
                                <Input id="new-password" type="password" />
                            </div>
                            <Button>Update Password</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </MainLayout>
    );
}
