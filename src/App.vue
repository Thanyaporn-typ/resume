<template>
  <div id="app">

    <!-- ══ Incoming Alert Toast ══ -->
    <transition name="toast">
      <div class="alert-toast" v-if="toast">
        <div class="toast-icon">🚨</div>
        <div class="toast-body">
          <div class="toast-title">แจ้งเหตุใหม่เข้ามา!</div>
          <div class="toast-sub">{{ toast.id }} — {{ toast.location }}</div>
        </div>
        <button class="toast-action" @click="switchToOfficer">
          ดูที่เจ้าหน้าที่ →
        </button>
        <button class="toast-close" @click="toast = null">✕</button>
      </div>
    </transition>

    <!-- ══ Mode Switcher ══ -->
    <div class="mode-switcher">
      <button
        :class="['mode-btn', mode === 'citizen' ? 'active' : '']"
        @click="mode = 'citizen'"
      >👤 ประชาชน</button>
      <button
        :class="['mode-btn', mode === 'officer' ? 'active' : '']"
        @click="mode = 'officer'; newTaskCount = 0"
      >
        🦺 เจ้าหน้าที่ภาคสนาม
        <span class="notif-badge" v-if="newTaskCount > 0">{{ newTaskCount }}</span>
      </button>
      <button
        :class="['mode-btn', mode === 'admin' ? 'active' : '']"
        @click="mode = 'admin'; newTaskCount = 0"
      >
        ⚙️ ผู้ดูแลระบบ
        <span class="notif-badge" v-if="mode !== 'admin' && newTaskCount > 0">{{ newTaskCount }}</span>
      </button>
    </div>

    <CitizenApp
      v-if="mode === 'citizen'"
      @report-submitted="handleNewReport"
    />
    <FieldOfficerApp
      v-if="mode === 'officer'"
      :external-tasks="sharedTasks"
    />
    <AdminApp
      v-if="mode === 'admin'"
      :external-incidents="sharedTasks"
    />
  </div>
</template>

<script>
import CitizenApp from './CitizenApp.vue'
import FieldOfficerApp from './FieldOfficerApp.vue'
import AdminApp from './AdminApp.vue'

export default {
  name: 'App',
  components: { CitizenApp, FieldOfficerApp, AdminApp },
  data() {
    return {
      mode: 'citizen',
      sharedTasks: [],
      newTaskCount: 0,
      toast: null,
      toastTimer: null,
    }
  },
  methods: {
    handleNewReport(report) {
      this.sharedTasks = [report, ...this.sharedTasks]
      this.newTaskCount++
      this.toast = report
      clearTimeout(this.toastTimer)
      this.toastTimer = setTimeout(() => { this.toast = null }, 6000)
    },
    switchToOfficer() {
      this.mode = 'officer'
      this.newTaskCount = 0
      this.toast = null
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');

* { box-sizing: border-box; margin: 0; padding: 0; }

body { background: #f0f2f5; font-family: 'Kanit', 'Inter', sans-serif; }

/* Mode Switcher */
.mode-switcher {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background: #060e1e;
  padding: 8px 16px;
}
.mode-btn {
  position: relative;
  padding: 7px 22px;
  border: none;
  background: transparent;
  color: #778;
  font-family: 'Kanit', 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 999px;
  transition: all 0.2s;
}
.mode-btn.active { background: #FFD006; color: #060e1e; }
.notif-badge {
  position: absolute;
  top: -2px; right: -2px;
  min-width: 18px; height: 18px;
  background: #ef4444;
  color: #fff;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 800;
  display: flex; align-items: center; justify-content: center;
  padding: 0 4px;
  animation: badge-pop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
@keyframes badge-pop {
  from { transform: scale(0); }
  to   { transform: scale(1); }
}

/* Alert Toast */
.alert-toast {
  position: fixed;
  bottom: 24px; right: 24px;
  z-index: 9999;
  background: #0a162f;
  color: #fff;
  border-radius: 14px;
  padding: 16px 18px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.35);
  border-left: 4px solid #ef4444;
  max-width: 380px;
  min-width: 300px;
}
.toast-icon { font-size: 26px; flex-shrink: 0; animation: ring 0.6s ease infinite alternate; }
@keyframes ring {
  from { transform: rotate(-10deg); }
  to   { transform: rotate(10deg); }
}
.toast-body { flex: 1; }
.toast-title { font-size: 15px; font-weight: 700; color: #FFD006; margin-bottom: 3px; }
.toast-sub { font-size: 13px; color: #aab; }
.toast-action {
  background: #FFD006;
  color: #0a162f;
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  font-family: 'Kanit', 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: opacity 0.2s;
}
.toast-action:hover { opacity: 0.85; }
.toast-close {
  background: none;
  border: none;
  color: #667;
  font-size: 16px;
  cursor: pointer;
  padding: 2px;
  flex-shrink: 0;
}
.toast-close:hover { color: #fff; }

/* Toast transition */
.toast-enter-active { animation: slide-up 0.35s cubic-bezier(0.34, 1.56, 0.64, 1); }
.toast-leave-active { animation: slide-down 0.25s ease-in; }
@keyframes slide-up {
  from { transform: translateY(80px); opacity: 0; }
  to   { transform: translateY(0); opacity: 1; }
}
@keyframes slide-down {
  from { transform: translateY(0); opacity: 1; }
  to   { transform: translateY(80px); opacity: 0; }
}

@media (max-width: 480px) {
  .alert-toast { left: 12px; right: 12px; bottom: 12px; }
}
</style>
