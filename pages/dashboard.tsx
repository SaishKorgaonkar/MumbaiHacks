"use client"

import { useState } from 'react'
import { Bar, Line, Pie } from 'recharts'
import { motion, AnimatePresence } from 'framer-motion'
import { Bell, CalendarIcon, ChevronLeft, Filter, LayoutDashboard, Mail, MessageSquare, Moon, Search, Settings, Sun, TrendingUp } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Skeleton } from "@/components/ui/skeleton"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Mock data for charts (same as before)
const conversionData = [
  { name: 'Jan', rate: 0.32 },
  { name: 'Feb', rate: 0.35 },
  { name: 'Mar', rate: 0.38 },
  { name: 'Apr', rate: 0.40 },
  { name: 'May', rate: 0.37 },
  { name: 'Jun', rate: 0.39 },
]

const clickThroughData = [
  { name: 'Email', rate: 0.05 },
  { name: 'Social', rate: 0.03 },
  { name: 'Display', rate: 0.02 },
  { name: 'Search', rate: 0.08 },
]

const emailPerformanceData = [
  { name: 'Open Rate', value: 25 },
  { name: 'Click Rate', value: 15 },
  { name: 'Bounce Rate', value: 5 },
  { name: 'Unsubscribe', value: 2 },
]

const tweetEngagementData = [
  { name: 'Likes', value: 1200 },
  { name: 'Retweets', value: 450 },
  { name: 'Replies', value: 300 },
  { name: 'Impressions', value: 10000 },
]

export default function EnhancedMarketingDashboard() {
  const [dateRange, setDateRange] = useState('Last 7 days')
  const [region, setRegion] = useState('Global')
  const [marketingType, setMarketingType] = useState('All')
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    // In a real application, you'd update the HTML class or a context here
  }

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed)
  }

  const handleFilterChange = () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => setIsLoading(false), 1000)
  }

  return (
    <div className={`flex h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* Sidebar */}
      <motion.div
        className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-4 flex flex-col`}
        animate={{ width: isSidebarCollapsed ? 80 : 256 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex items-center justify-between mb-8">
          <AnimatePresence>
            {!isSidebarCollapsed && (
              <motion.h1
                className={`text-2xl font-bold ${isDarkMode ? 'text-teal-400' : 'text-teal-600'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                MarketPro
              </motion.h1>
            )}
          </AnimatePresence>
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            <ChevronLeft className={`h-4 w-4 transition-transform duration-300 ${isSidebarCollapsed ? 'rotate-180' : ''}`} />
          </Button>
        </div>
        <nav className="flex-1">
          <AnimatePresence>
            {!isSidebarCollapsed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Button variant="ghost" className="w-full justify-start mb-2">
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
                <Button variant="ghost" className="w-full justify-start mb-2">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Campaigns
                </Button>
                <Button variant="ghost" className="w-full justify-start mb-2">
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </Button>
                <Button variant="ghost" className="w-full justify-start mb-2">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Social
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
          {isSidebarCollapsed && (
            <div className="flex flex-col items-center">
              <Button variant="ghost" size="icon" className="mb-2">
                <LayoutDashboard className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="mb-2">
                <TrendingUp className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="mb-2">
                <Mail className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="mb-2">
                <MessageSquare className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          )}
        </nav>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="flex-1 overflow-auto"
        animate={{ marginLeft: isSidebarCollapsed ? 80 : 256 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Header */}
        <header className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-4 flex justify-between items-center`}>
          <div className="flex items-center">
            <h2 className="text-xl font-semibold mr-4">Marketing Dashboard</h2>
            <Input
              type="text"
              placeholder="Search..."
              className={`w-64 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
              startIcon={<Search className="h-4 w-4" />}
            />
          </div>
          <div className="flex space-x-4 items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className={isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} onClick={handleFilterChange}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateRange}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onSelect={() => setDateRange('Last 7 days')}>Last 7 days</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setDateRange('Last 30 days')}>Last 30 days</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setDateRange('Last 3 months')}>Last 3 months</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className={isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} onClick={handleFilterChange}>
                  <Filter className="mr-2 h-4 w-4" />
                  {region}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onSelect={() => setRegion('Global')}>Global</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setRegion('North America')}>North America</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setRegion('Europe')}>Europe</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setRegion('Asia')}>Asia</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className={isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} onClick={handleFilterChange}>
                  <Filter className="mr-2 h-4 w-4" />
                  {marketingType}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onSelect={() => setMarketingType('All')}>All</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setMarketingType('Email')}>Email</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setMarketingType('Social')}>Social</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setMarketingType('Display')}>Display</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>New campaign results</DropdownMenuItem>
                <DropdownMenuItem>Weekly report ready</DropdownMenuItem>
                <DropdownMenuItem>Engagement spike detected</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Conversion Rate Chart */}
          <Card className={`col-span-2 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
            <CardHeader>
              <CardTitle className={isDarkMode ? 'text-teal-400' : 'text-teal-600'}>Conversion Rate</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-[300px] w-full" />
              ) : (
                <ChartContainer
                  config={{
                    rate: {
                      label: "Conversion Rate",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <Line
                    data={conversionData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="rate" stroke="#4FD1C5" strokeWidth={2} />
                  </Line>
                </ChartContainer>
              )}
            </CardContent>
          </Card>

          {/* Click-Through Rate Chart */}
          <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
            <CardHeader>
              <CardTitle className={isDarkMode ? 'text-purple-400' : 'text-purple-600'}>Click-Through Rate</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-[300px] w-full" />
              ) : (
                <ChartContainer
                  config={{
                    rate: {
                      label: "Click-Through Rate",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <Bar
                    data={clickThroughData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="rate" fill="#9F7AEA" />
                  </Bar>
                </ChartContainer>
              )}
            </CardContent>
          </Card>

          {/* Email Performance Chart */}
          <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
            <CardHeader>
              <CardTitle className={isDarkMode ? 'text-blue-400' : 'text-blue-600'}>Email Performance</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-[300px] w-full" />
              ) : (
                <ChartContainer
                  config={{
                    value: {
                      label: "Percentage",
                      color: "hsl(var(--chart-3))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <Pie
                    data={emailPerformanceData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#4299E1"
                    
                    label
                  >
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </Pie>
                </ChartContainer>
              )}
            </CardContent>
          </Card>

          {/* Tweet Engagement Chart */}
          <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
            <CardHeader>
              <CardTitle className={isDarkMode ? 'text-teal-400' : 'text-teal-600'}>Tweet Engagement</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-[300px] w-full" />
              ) : (
                <ChartContainer
                  config={{
                    value: {
                      label: "Count",
                      color: "hsl(var(--chart-4))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <Bar
                    data={tweetEngagementData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="value" fill="#4FD1C5" />
                  </Bar>
                </ChartContainer>
              )}
            </CardContent>
          </Card>

          {/* Key Metrics */}
          <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
            <CardHeader>
              <CardTitle className={isDarkMode ? 'text-purple-400' : 'text-purple-600'}>Key Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Reach</Label>
                  <div className="text-2xl font-bold">1,234,567</div>
                </div>
                <div>
                  <Label className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Engagement Rate</Label>
                  <div className="text-2xl font-bold">5.67%</div>
                </div>
                <div>
                  <Label className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>ROI</Label>
                  <div className="text-2xl font-bold">287%</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  )
}