import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

/* =======================
   Types
======================= */

type LeadStatus = 'Hot' | 'Warm' | 'Cold';

interface Lead {
  name: string;
  source: string;
  location: string;
  value: string;
  status: LeadStatus;
}

type TabType = 'All' | LeadStatus;

/* =======================
   Constants
======================= */

const TABS: TabType[] = ['All', 'Hot', 'Warm', 'Cold'];

const leadsData: Lead[] = [
  {
    name: 'Ahmed Al Zahra',
    source: 'Property Portal',
    location: 'Dubai Marina',
    value: 'AED 1.2M',
    status: 'Hot',
  },
  {
    name: 'Sara Khan',
    source: 'Website',
    location: 'Business Bay',
    value: 'AED 850K',
    status: 'Warm',
  },
  {
    name: 'Omar Farooq',
    source: 'Referral',
    location: 'JVC',
    value: 'AED 600K',
    status: 'Cold',
  },
  {
    name: 'Charlie',
    source: 'Property Portal',
    location: 'Reem Island',
    value: 'AED 3.7M',
    status: 'Hot',
  },
  {
    name: 'Sana Bukhari',
    source: 'LinkedIn',
    location: 'Corniche',
    value: 'AED 8M',
    status: 'Hot',
  },
];

/* =======================
   Component
======================= */

const Leads: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('All');
  const [search, setSearch] = useState<string>('');

  const filteredLeads = leadsData.filter(
    (lead) =>
      (activeTab === 'All' || lead.status === activeTab) &&
      lead.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <LinearGradient colors={['#0F172A', '#020617']} style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>Leads</Text>

      {/* Search */}
      <View style={styles.searchBox}>
        <TextInput
          placeholder="🔍 Search leads..."
          placeholderTextColor="#94A3B8"
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Tabs */}
      <View style={styles.tabsRow}>
        {TABS.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[
              styles.tab,
              activeTab === tab && styles.activeTab,
            ]}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Leads List */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredLeads.map((lead, index) => (
          <View key={index} style={styles.leadCard}>
            <View>
              <Text style={styles.leadName}>{lead.name}</Text>
              <Text style={styles.leadMeta}>
                {lead.source} • {lead.location}
              </Text>
            </View>

            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.leadValue}>{lead.value}</Text>
              <Text
                style={[
                  styles.status,
                  styles[`status${lead.status}` as keyof typeof styles],
                ]}
              >
                {lead.status}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabText}>＋</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};



export default Leads

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 20,
    marginTop:30
  },

  searchBox: {
    backgroundColor: '#020617',
    borderRadius: 14,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderWidth:1,
    borderColor: '#353947ff',
  },

  searchInput: {
    color: '#fff',
    height: 48,
  },

  tabsRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#020617',
    borderRadius: 20,
    marginRight: 10,
  },

  activeTab: {
    backgroundColor: '#14B8A6',
  },

  tabText: {
    color: '#94A3B8',
    fontWeight: '600',
  },

  activeTabText: {
    color: '#fff',
  },

  leadCard: {
    backgroundColor: '#020617',
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  leadName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

  leadMeta: {
    color: '#94A3B8',
    fontSize: 13,
    marginTop: 6,
  },

  leadValue: {
    color: '#fff',
    fontWeight: '700',
  },

  status: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: '700',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    overflow: 'hidden',
  },

  statusHot: {
    backgroundColor: '#DC2626',
    color: '#fff',
  },

  statusWarm: {
    backgroundColor: '#F59E0B',
    color: '#fff',
  },

  statusCold: {
    backgroundColor: '#2563EB',
    color: '#fff',
  },

  fab: {
    position: 'absolute',
    bottom: 120,
    right: 20,
    backgroundColor: '#14B8A6',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },

  fabText: {
    color: '#fff',
    fontSize: 32,
    marginBottom: 4,
  },
});
